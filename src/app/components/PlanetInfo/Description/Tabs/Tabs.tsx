import { useState } from 'react';
import styled from 'styled-components';
import { PlanetInfo } from '../../../../types/planetInfo';

type TabsProps = {
    planet: PlanetInfo;
    setGeo: React.Dispatch<React.SetStateAction<boolean>>;
    setInit: React.Dispatch<React.SetStateAction<boolean>>;
};

type button = {
    id: string;
    content: string;
    active?: boolean;
};

const ButtonsData: Array<button> = [
    {
        id: '01',
        content: 'OVERVIEW',
        active: true,
    },
    {
        id: '02',
        content: 'INTERNAL STRUCTURE',
    },
    {
        id: '03',
        content: 'SURFACE GEOLOGY',
    },
];

export const Tabs: React.FunctionComponent<TabsProps> = ({ planet, setGeo, setInit }) => {
    const [activeButton, setActiveButton] = useState<boolean>(true);

    const handleOnClick = (button: button) => {
        setActiveButton(false);

        if (button.id === '02') {
            setInit(true);
        } else {
            setInit(false);
        }

        if (button.id === '03') {
            setGeo(true);
        } else {
            setGeo(false);
        }
    };

    return (
        <Container>
            {ButtonsData.map((button) => (
                <Tab
                    key={button.id}
                    color={planet.color}
                    active={button.active ? activeButton : false}
                    onClick={() => handleOnClick(button)}>
                    <Number>{button.id}</Number>
                    {button.content}
                </Tab>
            ))}
        </Container>
    );
};

const Container = styled.div`
    width: 120%;
    display: flex;
    flex-direction: row;
    gap: 20px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grayDark};

    @media screen and (min-width: ${({ theme }) => theme.media.md}) {
        flex-direction: column;
        border-bottom: none;
        grid-area: 2 / 2 / 3 / 3;
        width: 100%;
        padding: 10px 20px;
    }

    @media screen and (min-width: ${({ theme }) => theme.media.xl}) {
        grid-area: 2 / 2 / 3 / 3;
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
    font-size: 10px;
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

    &.active::after {
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
            background-color: ${({ theme }) => theme.colors.grayDark};
        }

        &:focus {
            background-color: ${({ color }) => color};
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
