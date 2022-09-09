import styled from 'styled-components';
import { LinkIcon } from '../../../assets/images/link-icon';

import { PlanetInfo } from '../../../types/planetInfo';

type DescriptionProps = {
    planet: PlanetInfo;
    info: string;
    animate: boolean;
};

export const Description: React.FunctionComponent<DescriptionProps> = ({
    planet,
    info,
    animate,
}) => {
    return (
        <Information>
            <Title>{planet.name}</Title>
            <TextSecondary animate={animate}>{info}</TextSecondary>
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

type TextSecondaryProps = {
    animate: boolean;
};

const TextSecondary = styled.p<TextSecondaryProps>`
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
    line-height: 20px;
    animation: ${({ animate }) => (animate ? 'textAnimation' : '')} 2s ease-in-out;

    @media screen and (min-width: ${({ theme }) => theme.media.md}) {
        text-align: left;
        font-size: 14px;
    }

    @keyframes textAnimation {
        0% {
            line-height: 20px;
            opacity: 1;
        }

        50% {
            line-height: 30px;
            opacity: 0;
        }

        100% {
            line-height: 20px;
            opacity: 1;
        }
    }

    @media screen and (min-width: ${({ theme }) => theme.media.xl}) {
        font-size: 16px;
    }
`;

const WikiLink = styled.a`
    color: ${({ theme }) => theme.colors.grayLight};
`;
