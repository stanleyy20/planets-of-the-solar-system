import { motion } from 'framer-motion';
import styled from 'styled-components';
import { LinkIcon } from '../../../assets/images/link-icon';

import { PlanetInfo } from '../../../types/planetInfo';

type DescriptionProps = {
    planet: PlanetInfo;
    isAnimated: boolean;
    planetInfo: string;
};

export const Description: React.FunctionComponent<DescriptionProps> = ({ planet, isAnimated, planetInfo }) => {
    const containerAnimation = {
        hidden: {
            opacity: 0,
            x: 100,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: { delay: 1, duration: 1.5 },
        },
        exit: {
            opacity: 0,
            x: 100,
            transition: { duration: 1 },
        },
    };

    const { exit, hidden, visible } = containerAnimation;
    return (
        <Information initial={hidden} animate={visible} exit={exit}>
            <Title>{planet.name}</Title>
            <TextPrimary isAnimated={isAnimated}>{planetInfo}</TextPrimary>
            <Text>
                Source:{' '}
                <WikiLink href={planet.overview.source} target='_blank'>
                    Wikipedia <span>{LinkIcon}</span>
                </WikiLink>
            </Text>
        </Information>
    );
};

const Information = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    width: 100%;

    @media screen and (min-width: ${({ theme }) => theme.media.md}) {
        width: 100%;
        height: 250px;
        align-items: flex-start;
        grid-area: 2 / 1 / 3 / 2;
        padding-right: 15px;
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
    display: block;
    color: ${({ theme }) => theme.colors.grayLight};
    font-weight: bold;
`;

type TextSecondaryProps = {
    isAnimated: boolean;
};

const TextPrimary = styled.p<TextSecondaryProps>`
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
    line-height: 20px;
    animation: ${({ isAnimated }) => (isAnimated ? 'textAnimation' : '')} 2s ease-out;

    @media screen and (min-width: ${({ theme }) => theme.media.md}) {
        text-align: left;
        font-size: 14px;
    }

    @keyframes textAnimation {
        0% {
            transform: scale(1);
            opacity: 1;
        }

        50% {
            transform: scale(1.2);

            opacity: 0;
        }

        100% {
            transform: scale(1);
            opacity: 1;
        }
    }

    @media screen and (min-width: ${({ theme }) => theme.media.xl}) {
        font-size: 16px;
    }
`;

const WikiLink = styled.a`
    color: ${({ theme }) => theme.colors.grayLight};

    @media screen and (min-width: ${({ theme }) => theme.media.md}) {
        span {
            opacity: 0;
            transition: opacity 0.4s;
        }

        &:hover span {
            opacity: 1;
        }
    }
`;
