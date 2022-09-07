import styled from 'styled-components';
import { PlanetInfo } from '../../../../types/planetInfo';

type InfoProps = {
    planet: PlanetInfo;
    geo: boolean;
    int: boolean;
};

export const Info: React.FunctionComponent<InfoProps> = ({ planet, geo, int }) => {
    const content =
        !geo && !int
            ? planet.overview.content
            : geo
            ? planet.geology.content
            : planet.structure.content;

    return (
        <>
            <Text>{content}</Text>
        </>
    );
};

const Text = styled.p`
    color: ${({ theme }) => theme.colors.white};
    text-align: center;

    @media screen and (min-width: ${({ theme }) => theme.media.md}) {
        text-align: left;
        font-size: 14px;
    }

    @media screen and (min-width: ${({ theme }) => theme.media.xl}) {
        font-size: 16px;
    }
`;
