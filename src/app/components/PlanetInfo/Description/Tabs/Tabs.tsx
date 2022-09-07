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
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

type TabProps = {
    color: string;
    active: boolean;
};

const Tab = styled.button<TabProps>`
    background-color: ${({ active }) => (active ? ({ color }) => color : 'transparent')};
    width: 100%;
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.grayDark};
    color: ${({ theme }) => theme.colors.white};
    padding: 15px 0;
    cursor: pointer;
    font-weight: 700;
    font-size: 17px;
    letter-spacing: 1px;
    transition: background-color linear 0.3s;
    display: flex;
    gap: 30px;
    padding-left: 30px;

    &:hover {
        background-color: ${({ theme }) => theme.colors.grayDark};
    }

    &:focus {
        background-color: ${({ color }) => color};
    }
`;

const Number = styled.span`
    color: ${({ theme }) => theme.colors.grayDark};
    font-weight: 700;
`;
