import styled from 'styled-components';
import { LinkIcon } from '../../../assets/images/link-icon';
import { PlanetInfo } from '../../../types/planetInfo';
import { Info } from './Info/Info';
import { Tabs } from './Tabs/Tabs';

type DescriptionProps = {
    planet: PlanetInfo;
    setGeo: React.Dispatch<React.SetStateAction<boolean>>;
    setInt: React.Dispatch<React.SetStateAction<boolean>>;
    geo: boolean;
    int: boolean;
};

export const Description: React.FunctionComponent<DescriptionProps> = ({
    planet,
    geo,
    int,
    setGeo,
    setInt,
}) => {
    return (
        <Information>
            <Title>{planet.name}</Title>
            <Info planet={planet} geo={geo} int={int} />
            <Text>
                Source:{' '}
                <WikiLink href={planet.overview.source} target='_blank'>
                    Wikipedia {LinkIcon}
                </WikiLink>
            </Text>

            <Tabs setInit={setInt} setGeo={setGeo} planet={planet} />
        </Information>
    );
};

const Title = styled.h2`
    color: white;
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: 80px;
`;

const Information = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    width: 30%;
`;

const Text = styled.p`
    color: ${({ theme }) => theme.colors.grayLight};
    font-weight: bold;
`;

const WikiLink = styled.a`
    color: ${({ theme }) => theme.colors.grayLight};
`;
