import { SyntheticEvent } from 'react';
import styled from 'styled-components';
import { ButtonsData } from '../../../data/tabsData';
import { PlanetInfo } from '../../../types/planetInfo';
import { TabsType } from '../../../types/tabs';

type TabsProps = {
    planet: PlanetInfo;
    handleChange: (button: TabsType, event: SyntheticEvent) => void;
    activeButton: string;
};

export const Tabs: React.FunctionComponent<TabsProps> = ({
    planet,
    handleChange,
    activeButton,
}) => {
    return (
        <Container>
            {ButtonsData.map((button) => {
                const active = activeButton === button.id;

                return (
                    <Tab
                        key={button.id}
                        color={planet.color}
                        active={active}
                        onClick={(event: SyntheticEvent) => {
                            handleChange(button, event);
                        }}>
                        <Number>{button.id}</Number>
                        {button.content}
                    </Tab>
                );
            })}
        </Container>
    );
};

const Container = styled.div`
    width: 120%;
    display: flex;
    flex-direction: row;
    gap: 20px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grayDark};
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
    active: boolean;
};

const Tab = styled.button<TabProps>`
    background-color: transparent;
    position: relative;
    width: 30%;
    flex-direction: row;
    outline: none;
    border: none;
    color: ${({ theme }) => theme.colors.grayLight};
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
        width: 0;
        box-shadow: inset 1px 72px 0px -30px ${({ color }) => color};
        transition: width 0.3s;
    }

    &:focus {
        color: ${({ theme }) => theme.colors.white};
    }

    &:active::after {
        width: 100%;
    }

    &:focus::after {
        width: 100%;
    }

    @media screen and (min-width: ${({ theme }) => theme.media.md}) {
        background-color: ${({ active }) => (active ? ({ color }) => color : 'transparent')};
        width: 100%;
        font-size: 12px;
        border: 1px solid ${({ theme }) => theme.colors.grayDark};
        padding-left: 30px;
        justify-content: left;
        color: ${({ theme }) => theme.colors.white};

        &:hover {
            background-color: ${({ active }) =>
                active ? 'none' : ({ theme }) => theme.colors.grayDark};
        }

        &:active::after {
            width: 0;
        }

        &:focus::after {
            width: 0;
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
