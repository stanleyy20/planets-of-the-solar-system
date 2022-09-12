import styled from 'styled-components';
import { Desktop } from './Desktop';
import { Mobile } from './Mobile';

type NavbarProps = {
    setActivePlanet: React.Dispatch<React.SetStateAction<string>>;
};

export const Navbar: React.FunctionComponent<NavbarProps> = ({ setActivePlanet }) => {
    return (
        <Header>
            <Mobile />
            <Desktop setActivePlanet={setActivePlanet} />
        </Header>
    );
};

const Header = styled.header`
    width: 100%;
    color: ${({ theme }) => theme.colors.white};
    border-bottom: 1px solid ${({ theme }) => theme.colors.grayDark};
    height: 80px;
    display: flex;

    @media screen and (min-width: ${({ theme }) => theme.media.md}) {
        height: 100px;
    }
    @media screen and (min-width: ${({ theme }) => theme.media.xl}) {
        height: 80px;
    }
`;
