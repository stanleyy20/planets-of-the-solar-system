import styled from 'styled-components';
import { PLANETS } from '../../../data/planets';
import { Images } from '../../../assets/index';

import { asteroidsBackground } from '../../../data/asteroidsBackground';
import { NavLink } from 'react-router-dom';

export const Orbits: React.FunctionComponent = () => {
    const { Sun } = Images;

    return (
        <Container>
            {PLANETS.map((planet) => {
                return (
                    <NavLink key={planet.name} to={planet.name}>
                        <Orbit
                            height={planet.radius}
                            width={planet.radius}
                            color={planet.color}
                            orbitTime={planet.orbitTime}
                            zIndex={planet.zIndex}>
                            <PlanetImg size={planet.planetSize} alt='planet' src={planet.overview.image} />
                        </Orbit>
                    </NavLink>
                );
            })}

            <SunImg src={Sun} alt='sun' />
            <Asteroids></Asteroids>
        </Container>
    );
};

const Container = styled.div`
    position: relative;
    width: 80vw;
    height: 80vh;
    margin: 0 auto;
`;

type OrbitProps = {
    width: string;
    height: string;
    zIndex: number;
    orbitTime: number;
    color: string;
};

const Orbit = styled.div<OrbitProps>`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: ${({ height }) => height};
    width: ${({ width }) => width};
    border: 1px solid ${({ theme }) => theme.colors.whiteAlpha50};
    border-radius: 50%;
    animation: orbitPlanet ${({ orbitTime }) => orbitTime}s linear infinite;
    cursor: pointer;
    z-index: ${({ zIndex }) => zIndex};
    transform: scale(1);

    &:hover {
        border: 1px solid ${({ color }) => color};
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
    width: 70px;
    box-shadow: 0px 0px 20px 2px #fc9736;
    border-radius: 50%;
`;

type PlanetImgProps = {
    size: string;
};

const PlanetImg = styled.img<PlanetImgProps>`
    position: absolute;
    width: ${({ size }) => size};
    top: 0;
    transform: translate(-50%, -50%) rotate(0);

    &:hover {
        transform: translate(-50%, -50%) rotate(0) scale(1.3);
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
