import styled from 'styled-components';
import { PlanetInfo } from '../../../types/planetInfo';

type FooterProps = {
    planet: PlanetInfo;
};

export const Footer: React.FunctionComponent<FooterProps> = ({ planet }) => {
    return (
        <Container>
            {planet.properties.map((item) => (
                <Item key={item.property}>
                    <Text>{item.text}</Text>
                    <Property>{item.property}</Property>
                </Item>
            ))}
        </Container>
    );
};

const Container = styled.footer`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    color: ${({ theme }) => theme.colors.white};
    gap: 10px;

    @media screen and (min-width: ${({ theme }) => theme.media.md}) {
        flex-direction: row;
    }
`;
const Item = styled.div`
    border: 1px solid ${({ theme }) => theme.colors.grayDark};
    width: 100%;
    padding: 15px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (min-width: ${({ theme }) => theme.media.md}) {
        flex-direction: column;
        align-items: flex-start;
        width: 25%;
        justify-content: center;
        padding: 25px 25px;
    }

    @media screen and (min-width: ${({ theme }) => theme.media.xl}) {
        flex-direction: column;
        align-items: flex-start;
        padding: 25px 25px;
    }
`;
const Text = styled.p`
    color: ${({ theme }) => theme.colors.grayLight};
    font-size: 8px;
    font-weight: bold;

    @media screen and (min-width: ${({ theme }) => theme.media.md}) {
        font-size: 12px;
    }

    @media screen and (min-width: ${({ theme }) => theme.media.xl}) {
        font-size: 14px;
    }
`;
const Property = styled.p`
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: 20px;

    @media screen and (min-width: ${({ theme }) => theme.media.md}) {
        font-size: 24px;
    }

    @media screen and (min-width: ${({ theme }) => theme.media.xl}) {
        font-size: 44px;
    }
`;
