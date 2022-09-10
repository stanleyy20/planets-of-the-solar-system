import { motion } from 'framer-motion';

import styled from 'styled-components';

import { TAB_DATA } from '../../../data/tabsData';
import { PlanetInfo } from '../../../types/planetInfo';
import { Tabs as TabTypes } from '../../../types/tabs';

type TabsProps = {
    planet: PlanetInfo;
    handleChange: (tab: TabTypes) => void;
    currentTab: string;
};

export const Tabs: React.FunctionComponent<TabsProps> = ({ planet, handleChange, currentTab }) => {
    const containerAnimation = {
        hidden: {
            opacity: 0,
            x: 100,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: { delay: 1, duration: 1.5 },
        },
        exit: {
            opacity: 0,
            x: 100,
            transition: { duration: 1 },
        },
    };

    const { exit, hidden, visible } = containerAnimation;
    return (
        <Container initial={hidden} animate={visible} exit={exit}>
            {TAB_DATA.map((tab) => {
                const current = currentTab === tab.type;

                return (
                    <Tab
                        key={tab.type}
                        color={planet.color}
                        current={current}
                        onClick={() => {
                            handleChange(tab);
                        }}>
                        <Number>{tab.type}</Number>
                        {tab.content}
                    </Tab>
                );
            })}
        </Container>
    );
};

const Container = styled(motion.div)`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 20px;
    z-index: 50;

    @media screen and (min-width: ${({ theme }) => theme.media.md}) {
        flex-direction: column;
        border-bottom: none;
        grid-area: 2 / 2 / 3 / 3;
        width: 100%;
    }

    @media screen and (min-width: ${({ theme }) => theme.media.xl}) {
        grid-area: 2 / 2 / 3 / 3;
        padding-top: 50px;
    }
`;

type TabProps = {
    color: string;
    current: boolean;
};

const Tab = styled.button<TabProps>`
    background-color: transparent;
    position: relative;
    width: 30%;
    flex-direction: row;
    outline: none;
    border: none;
    color: ${({ current }) =>
        current ? ({ theme }) => theme.colors.white : ({ theme }) => theme.colors.grayLight};
    padding: 15px 0;
    cursor: pointer;
    font-weight: 700;
    letter-spacing: 1px;
    transition: background-color linear 0.3s;
    display: flex;
    gap: 30px;
    font-size: 12px;
    justify-content: center;
    align-items: center;

    &::after {
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
        height: 6px;
        width: ${({ current }) => (current ? '100%' : '0')};
        box-shadow: inset 1px 72px 0px -30px ${({ color }) => color};
        transition: width 0.3s;

        @media screen and (min-width: ${({ theme }) => theme.media.md}) {
            width: 0;
        }
    }

    @media screen and (min-width: ${({ theme }) => theme.media.md}) {
        background-color: ${({ current }) => (current ? ({ color }) => color : 'transparent')};
        width: 100%;
        font-size: 12px;
        border: 1px solid ${({ theme }) => theme.colors.grayDark};
        padding-left: 30px;
        justify-content: left;
        color: ${({ theme }) => theme.colors.white};
        transition: background-color 1s;

        &:hover {
            background-color: ${({ current }) =>
                current ? 'none' : ({ theme }) => theme.colors.grayDark};
        }
    }

    @media screen and (min-width: ${({ theme }) => theme.media.xl}) {
        font-size: 17px;
    }
`;

const Number = styled.span`
    color: ${({ theme }) => theme.colors.grayDark};
    font-weight: 700;
    display: none;

    @media screen and (min-width: ${({ theme }) => theme.media.md}) {
        display: block;
    }
`;
