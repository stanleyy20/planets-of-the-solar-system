import styled, { ThemeProvider } from 'styled-components';
import { PlanetInfo } from '../../types/planetInfo';

type PlanetItemProps = {
    planet: PlanetInfo;
};
export const PlanetItem: React.FunctionComponent<PlanetItemProps> = ({ planet }) => {
    return (
        <ThemeProvider theme={{ primaryColor: planet.color }}>
            <Text>{planet.name}</Text>
        </ThemeProvider>
    );
};

const Text = styled.p`
    text-align: center;
    color: ${({ theme }) => theme.primaryColor};
`;
