import styled from 'styled-components';
import { LinkIcon } from '../../../assets/images/link-icon';
import { PlanetInfo } from '../../../types/planetInfo';

type DescriptionProps = {
    planet: PlanetInfo;

    geo: boolean;
    int: boolean;
};

export const Description: React.FunctionComponent<DescriptionProps> = ({ planet, geo, int }) => {
    const content =
        !geo && !int
            ? planet.overview.content
            : geo
            ? planet.geology.content
            : planet.structure.content;

    return (
        <Information>
            <Title>{planet.name}</Title>
            <TextSecondary>{content}</TextSecondary>
            <Text>
                Source:{' '}
                <WikiLink href={planet.overview.source} target='_blank'>
                    Wikipedia {LinkIcon}
                </WikiLink>
            </Text>
        </Information>
    );
};

const Information = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    width: 100%;
    padding-top: 35px;

    @media screen and (min-width: ${({ theme }) => theme.media.md}) {
        width: 100%;
        align-items: flex-start;
        grid-area: 2 / 1 / 3 / 2;
    }

    @media screen and (min-width: ${({ theme }) => theme.media.xl}) {
        grid-area: 1 / 2 / 2 / 3;
    }
`;

const Title = styled.h2`
    color: white;
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: 45px;

    @media screen and (min-width: ${({ theme }) => theme.media.md}) {
        font-size: 55px;
    }
`;

const Text = styled.p`
    color: ${({ theme }) => theme.colors.grayLight};
    font-weight: bold;
`;

const TextSecondary = styled.p`
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

const WikiLink = styled.a`
    color: ${({ theme }) => theme.colors.grayLight};
`;
