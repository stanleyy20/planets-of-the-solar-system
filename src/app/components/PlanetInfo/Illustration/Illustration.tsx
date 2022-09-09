import { motion } from 'framer-motion';
import styled from 'styled-components';
import { PlanetInfo } from '../../../types/planetInfo';

type IllustrationProps = {
    planet: PlanetInfo;
    animation: boolean;
    geo: boolean;
    src: string;
};
export const Illustration: React.FunctionComponent<IllustrationProps> = ({
    planet,
    animation,
    geo,
    src,
}) => {
    const containerAnimation = {
        hidden: {
            opacity: 0,
            scale: 0.5,
            rotate: '20deg',
            x: 200,
        },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            x: 0,
            transition: { delay: 1, duration: 1.5 },
        },
        exit: {
            opacity: 0,
            scale: 0.5,
            rotate: '-20deg',
            x: -200,
            transition: { duration: 1 },
        },
    };

    const { exit, hidden, visible } = containerAnimation;

    return (
        <ImgWrapper initial={hidden} animate={visible} exit={exit}>
            <Img
                src={src}
                desktopWidth={planet.desktopImgWidth}
                tabletWidth={planet.tabletImgWidth}
                mobileWidth={planet.mobileImgWidth}
                animate={animation}
                geo={geo}
                secondImg={planet.geology.geo}></Img>
        </ImgWrapper>
    );
};

type ImgProps = {
    mobileWidth: string;
    tabletWidth: string;
    desktopWidth: string;
    animate: boolean;
    src: string;
    secondImg: string;
    geo: boolean;
};

const ImgWrapper = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding-top: 50px;

    @media screen and (min-width: ${({ theme }) => theme.media.sm}) {
        grid-area: 1 / 1 / 2 / 3;
        justify-self: center;
    }

    @media screen and (min-width: ${({ theme }) => theme.media.xl}) {
        grid-area: 1 / 1 / 3 / 2;
        justify-self: center;
    }
`;

const Img = styled.div<ImgProps>`
    position: relative;
    width: ${({ mobileWidth }) => mobileWidth};
    height: 100%;
    background-image: url(${({ src }) => src});
    background-repeat: no-repeat;
    background-size: 70%;
    background-position: center;
    animation: ${({ animate }) => (animate ? 'planetAnimation' : '')} 2s ease-in-out;
    transition: background-image 2s;

    &::after {
        position: absolute;
        content: '';
        bottom: 0;
        left: 50%;
        width: 80px;
        height: 80px;
        background-image: url(${({ geo }) => (geo ? ({ secondImg }) => secondImg : '')});
        background-size: 80%;
        background-position: center;
        background-repeat: no-repeat;
        transform: translateX(-50%);
        transition: 1.5s background-image;

        @media screen and (min-width: ${({ theme }) => theme.media.md}) {
            background-size: 50%;
            width: 180px;
            height: 180px;
            bottom: -20%;
        }

        @media screen and (min-width: ${({ theme }) => theme.media.xl}) {
            bottom: -25%;
            background-size: 80%;
            width: 180px;
            height: 180px;
        }
    }

    @media screen and (min-width: ${({ theme }) => theme.media.md}) {
        width: ${({ tabletWidth }) => tabletWidth};
    }

    @media screen and (min-width: ${({ theme }) => theme.media.xl}) {
        width: ${({ desktopWidth }) => desktopWidth};
    }

    @keyframes planetAnimation {
        0% {
            transform: scale(1) rotate(0);
        }

        50% {
            transform: scale(0) rotate(180deg);
            opacity: 0;
        }

        100% {
            transform: scale(1) rotate(0);
            opacity: 1;
        }
    }
`;
