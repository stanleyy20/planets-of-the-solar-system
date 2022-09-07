import styled from 'styled-components';
import { PlanetInfo } from '../../../types/planetInfo';

type IllustrationProps = {
    planet: PlanetInfo;
    geo: boolean;
    int: boolean;
};
export const Illustration: React.FunctionComponent<IllustrationProps> = ({ planet, geo, int }) => {
    const src = !int ? planet.overview.image : planet.structure.image;

    return (
        <ImgWrapper>
            <Img
                src={src}
                active={true}
                desktopWidth={planet.desktopImgWidth}
                tabletWidth={planet.tabletImgWidth}
                mobileWidth={planet.mobileImgWidth}></Img>
            <Span geo={geo} secondImg={planet.geology.geo}></Span>
        </ImgWrapper>
    );
};

type SpanProps = {
    secondImg: string;
    geo: boolean;
};

type ImgProps = {
    active: boolean;
    mobileWidth: string;
    tabletWidth: string;
    desktopWidth: string;
};

const ImgWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
`;

const Span = styled.span<SpanProps>`
    position: absolute;

    &::before {
        content: '';
        position: absolute;
        width: 250px;
        height: 400px;
        background-image: url(${({ secondImg }) => secondImg});
        background-size: 70%;
        background-position: center;
        background-repeat: no-repeat;
        transform: translateX(-50%);
        bottom: -450px;
        opacity: ${({ geo }) => (geo ? 1 : 0)};
    }
`;

const Img = styled.img<ImgProps>`
    width: ${({ desktopWidth }) => desktopWidth};
    transform: scale(${({ active }) => (active ? 1 : 0)});
`;
