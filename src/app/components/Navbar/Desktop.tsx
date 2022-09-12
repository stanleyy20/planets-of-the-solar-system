import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { PLANETS } from '../../data/planets';

type DesktopProps = {
    setActivePlanet: React.Dispatch<React.SetStateAction<string>>;
};

export const Desktop: React.FunctionComponent<DesktopProps> = ({ setActivePlanet }) => {
    const Links = PLANETS.map((planet) => {
        return (
            <StyledLink
                primary_color={planet.color}
                to={planet.name}
                onMouseOver={() => setActivePlanet(planet.name)}
                onMouseLeave={() => setActivePlanet('/')}
                onFocus={() => setActivePlanet(planet.name)}
                onBlur={() => setActivePlanet('/')}
                key={planet.name}>
                {planet.name.toUpperCase()}
            </StyledLink>
        );
    });

    return (
        <Wrapper>
            <BackLink to='/'>
                <Title>SOLAR SYSTEM</Title>
            </BackLink>
            <Navigation>{Links}</Navigation>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: none;

    @media screen and (min-width: ${({ theme }) => theme.media.md}) {
        display: flex;
        width: 80%;
        height: 100%;
        margin: 0 auto;
        flex-direction: column;
        gap: 10px;
    }

    @media screen and (min-width: ${({ theme }) => theme.media.xl}) {
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        gap: 0;
    }
`;

const Navigation = styled.nav`
    text-decoration: none;
    height: 100%;
    display: flex;
    gap: 25px;
    justify-content: center;

    @media screen and (min-width: ${({ theme }) => theme.media.md}) {
        justify-content: space-evenly;
    }

    @media screen and (min-width: ${({ theme }) => theme.media.xl}) {
        align-items: center;
    }
`;

const StyledLink = styled(NavLink)<LinkProps>`
    position: relative;
    display: block;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
    font-size: 12px;
    height: 100%;
    display: flex;
    align-items: center;
    box-shadow: none;

    &::after {
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 0;
        height: 6px;
        width: 0;
        box-shadow: inset 1px 72px 0px -30px ${(props) => props.primary_color};
        transition: width 0.3s;
    }

    &.active::after {
        width: 100%;
    }

    &:hover::after {
        width: 100%;
    }
`;

type LinkProps = {
    primary_color: string;
};

const Title = styled.h2`
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: 30px;
    font-weight: 300;

    @media screen and (min-width: ${({ theme }) => theme.media.md}) {
        text-align: center;
    }
`;

const BackLink = styled(NavLink)`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
`;
