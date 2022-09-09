import styled, { ThemeProvider } from 'styled-components';
import { PlanetInfo } from '../../types/planetInfo';
import { Description } from './Description/Description';
import { Tabs } from './Tabs/Tabs';
import { Footer } from './Footer/Footer';

import { Illustration } from './Illustration/Illustration';
import { useDataChange } from '../../hooks/useDataChange';

type PlanetItemProps = {
    planet: PlanetInfo;
};

export const PlanetItem: React.FunctionComponent<PlanetItemProps> = ({ planet }) => {
    const { handleOnClick, animate, src, geo, content, activeButton } = useDataChange(planet);

    return (
        <ThemeProvider theme={{ primaryColor: planet.color }}>
            <Wrapper>
                <Body>
                    <Tabs
                        handleChange={handleOnClick}
                        planet={planet}
                        activeButton={activeButton}
                    />
                    <Illustration src={src} animation={animate} geo={geo} planet={planet} />
                    <Description planet={planet} animate={animate} info={content} />
                </Body>
                <Footer planet={planet} />
            </Wrapper>
        </ThemeProvider>
    );
};

const Wrapper = styled.section`
    padding: 0 30px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding-bottom: 50px;
    @media screen and (min-width: 550px) {
        padding: 0 100px;
    }

    @media screen and (min-width: ${({ theme }) => theme.media.md}) {
        width: 85%;
        padding-bottom: 20px;
        padding-left: 0;
        padding-right: 0;
        gap: 50px;
    }

    @media screen and (min-width: ${({ theme }) => theme.media.xl}) {
        gap: 150px;
        width: 85%;
        justify-content: space-between;
        padding-top: 20px;
    }

    @media screen and (min-width: 1600px) {
        width: 70%;
    }
`;

const Body = styled.div`
    height: 75vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media screen and (min-width: ${({ theme }) => theme.media.md}) {
        display: grid;
        grid-row-gap: 50px;
        justify-content: center;
        height: 70vh;
        grid-template-rows: 60% 30%;
        grid-template-columns: 60% 40%;
    }

    @media screen and (min-width: ${({ theme }) => theme.media.xl}) {
        display: grid;
        grid-row-gap: 10px;
        justify-content: space-between;
        padding-bottom: 0;
        height: 55vh;
    }
`;
