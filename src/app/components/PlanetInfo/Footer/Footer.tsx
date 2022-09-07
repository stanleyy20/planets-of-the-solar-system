import styled from 'styled-components';
import { PlanetInfo } from '../../../types/planetInfo';

type FooterProps = {
    planet: PlanetInfo;
};

export const Footer: React.FunctionComponent<FooterProps> = ({ planet }) => {
    return (
        <Container>
            {planet.properties.map((item) => (
                <Item>
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
    color: ${({ theme }) => theme.colors.white};
`;
const Item = styled.div`
    border: 1px solid ${({ theme }) => theme.colors.grayDark};
    width: 22%;
    padding: 35px 25px;
`;
const Text = styled.p`
    color: ${({ theme }) => theme.colors.grayLight};
    font-size: 14px;
    font-weight: bold;
`;
const Property = styled.p`
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: 44px;
`;
