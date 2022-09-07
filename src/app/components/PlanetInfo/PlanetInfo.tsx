import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { PlanetInfo } from '../../types/planetInfo';
import { Description } from './Description/Description';
import { Tabs } from './Description/Tabs/Tabs';
import { Footer } from './Footer/Footer';

import { Illustration } from './Illustration/Illustration';

type PlanetItemProps = {
    planet: PlanetInfo;
};

export const PlanetItem: React.FunctionComponent<PlanetItemProps> = ({ planet }) => {
    const [geo, setGeo] = useState<boolean>(false);
    const [int, setInt] = useState<boolean>(false);

    return (
        <ThemeProvider theme={{ primaryColor: planet.color }}>
            <Wrapper>
                <Body>
                    <Tabs setInit={setInt} setGeo={setGeo} planet={planet} />
                    <Illustration int={int} geo={geo} planet={planet} />
                    <Description int={int} geo={geo} planet={planet} />
                </Body>
                <Footer planet={planet} />
            </Wrapper>
        </ThemeProvider>
    );
};

const Wrapper = styled.section`
    padding-top: 0;
    width: 85%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding-bottom: 50px;

    @media screen and (min-width: ${({ theme }) => theme.media.md}) {
        width: 90%;
        padding-bottom: 20px;
        padding-top: 50px;
        gap: 50px;
    }

    @media screen and (min-width: ${({ theme }) => theme.media.xl}) {
        gap: 150px;
        width: 85%;
        min-height: 85vh;
        justify-content: space-between;
    }

    @media screen and (min-width: 1600px) {
        width: 70%;
    }
`;

const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 25px;

    @media screen and (min-width: ${({ theme }) => theme.media.md}) {
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-rows: 50% 50%;
        grid-row-gap: 50px;
    }

    @media screen and (min-width: ${({ theme }) => theme.media.xl}) {
        height: 80%;
        display: grid;
        grid-template-columns: 70% 30%;
        grid-row-gap: 10px;
    }
`;
