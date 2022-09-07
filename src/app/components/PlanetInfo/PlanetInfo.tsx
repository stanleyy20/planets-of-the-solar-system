import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { PlanetInfo } from '../../types/planetInfo';
import { Description } from './Description/Description';
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
                    <Illustration int={int} geo={geo} planet={planet} />
                    <Description
                        int={int}
                        geo={geo}
                        setGeo={setGeo}
                        setInt={setInt}
                        planet={planet}
                    />
                </Body>
                <Footer planet={planet} />
            </Wrapper>
        </ThemeProvider>
    );
};

const Wrapper = styled.section`
    padding-top: 50px;
    width: 70%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 150px;
`;

const Body = styled.div`
    display: flex;
    height: 100%;
    justify-content: space-between;
`;
