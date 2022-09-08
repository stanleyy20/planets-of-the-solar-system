import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { PLANETS } from '../../data/planets';

export const Desktop: React.FunctionComponent = () => {
    const Links = PLANETS.map((planet) => {
        const primaryColor =
            planet.name === 'Earth'
                ? 'hsl(238,99%,66%)'
                : null || planet.name === 'Jupiter'
                ? 'hsl(27,75%,70%)'
                : null || planet.name === 'Mars'
                ? 'hsl(12,100%,64%)'
                : null || planet.name === 'Mercury'
                ? 'hsl(196,83%,93%)'
                : null || planet.name === 'Neptune'
                ? 'hsl(222,95%,63%)'
                : null || planet.name === 'Saturn'
                ? 'hsl(17, 73%, 46%)'
                : null || planet.name === 'Uranus'
                ? 'hsl(168,82%,67%)'
                : null || planet.name === 'Venus'
                ? 'hsl(39,88%,73%)'
                : null;

        return (
            <StyledLink
                primary_color={primaryColor ? primaryColor : 'white'}
                to={planet.name}
                key={planet.name}>
                {planet.name.toUpperCase()}
            </StyledLink>
        );
    });

    return (
        <Wrapper>
            <NavLink
                style={{
                    textDecoration: 'none',
                    color: 'white',
                }}
                to='/'>
                <Title>THE PLANETS</Title>
            </NavLink>
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
