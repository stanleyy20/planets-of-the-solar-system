import styled from 'styled-components';
import { PLANETS } from '../../data/planets';
import { Images } from '../../assets/index';

import { asteroidsBackground } from '../../data/asteroidsBackground';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

export const SolarSystem: React.FunctionComponent = () => {
    const { Sun } = Images;

    const containerAnimation = {
        hidden: {
            opacity: 0,
            scale: 6,
            rotate: '-40deg',
        },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: { delay: 1, duration: 3 },
        },
        exit: {
            opacity: 0,
            scale: 0.95,
            rotate: '-10deg',
            transition: { duration: 1 },
        },
    };

    const { exit, hidden, visible } = containerAnimation;

    return (
        <Container initial={hidden} animate={visible} exit={exit}>
            {PLANETS.map((planet) => {
                return (
                    <NavLink key={planet.name} to={planet.name}>
                        <Orbit
                            height={planet.radius}
                            width={planet.radius}
                            color={planet.color}
                            orbitTime={planet.orbitTime}
                            zIndex={planet.zIndex}
                            size={planet.planetSize}
                            planetSrc={planet.overview.image}></Orbit>
                    </NavLink>
                );
            })}

            <SunImg src={Sun} alt='sun' />
            <Asteroids></Asteroids>
        </Container>
    );
};

const Container = styled(motion.div)`
    position: relative;

    height: 80vh;
    margin: 0 auto;

    @media screen and (min-width: ${({ theme }) => theme.media.md}) {
        margin: 40px auto;
    }
`;

type OrbitProps = {
    width: number;
    height: number;
    zIndex: number;
    orbitTime: number;
    color: string;
    size: number;
    planetSrc: string;
};

const Orbit = styled.div<OrbitProps>`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: ${({ height }) => height * 0.5}px;
    width: ${({ width }) => width * 0.5}px;
    border: 1px solid ${({ theme }) => theme.colors.whiteAlpha50};
    border-radius: 50%;
    animation: orbitPlanet ${({ orbitTime }) => orbitTime}s linear infinite;
    z-index: ${({ zIndex }) => zIndex};
    cursor: pointer;

    @media screen and (min-width: ${({ theme }) => theme.media.md}) {
        height: ${({ height }) => height}px;
        width: ${({ width }) => width}px;
    }

    &:hover {
        border: 1px solid ${({ color }) => color};
    }

    &:hover::after {
        transform: translate(-50%, -50%) scale(1.4);
    }

    &::after {
        content: '';
        position: absolute;
        left: 50%;
        top: 0;
        transform: translate(-50%, -50%);
        width: ${({ size }) => size * 0.7}px;
        height: ${({ size }) => size * 0.7}px;
        background-image: url(${({ planetSrc }) => planetSrc});
        background-repeat: no-repeat;
        background-size: 100%;
        transition: transform 0.6s;

        @media screen and (min-width: ${({ theme }) => theme.media.md}) {
            width: ${({ size }) => size}px;
            height: ${({ size }) => size}px;
        }
    }

    @keyframes orbitPlanet {
        0% {
            transform: translate(-50%, -50%) rotate(0deg);
        }
        100% {
            transform: translate(-50%, -50%) rotate(-360deg);
        }
    }
`;

const SunImg = styled.img`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 35px;
    box-shadow: 0px 0px 20px 2px #fc9736;
    border-radius: 50%;

    @media screen and (min-width: ${({ theme }) => theme.media.md}) {
        width: 70px;
    }
`;

export const Asteroids = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    border: 1px solid rgba(102, 166, 229, 0.12);
    border-radius: 1000px;
    transform: translate(-50%, -50%);
    height: 330px;
    width: 330px;
    opacity: 0.7;
    border-color: transparent;
    overflow: hidden;
    animation: orbit 179.9558282773s linear infinite;

    &::before {
        position: absolute;
        content: '';
        left: 50%;
        transform: translate(-50%, -50%);
        top: 50%;
        height: 210px;
        width: 210px;
        background: transparent;
        border-radius: 140px !important;
        box-shadow: ${asteroidsBackground};
    }
    @keyframes orbit {
        0% {
            transform: translate(-50%, -50%) rotate(0deg);
        }
        100% {
            transform: translate(-50%, -50%) rotate(-360deg);
        }
    }
`;
