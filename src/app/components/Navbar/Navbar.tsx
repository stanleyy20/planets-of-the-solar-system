import styled from 'styled-components';
import { Desktop } from './Desktop';
import { Mobile } from './Mobile';

export const Navbar: React.FunctionComponent = () => {
    return (
        <Header>
            <Mobile />
            <Desktop />
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
`;
