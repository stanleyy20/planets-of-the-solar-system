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
    width: 100%;

    @media screen and (min-width: ${({ theme }) => theme.media.sm}) {
        grid-area: 1 / 1 / 2 / 3;
        justify-self: center;
    }

    @media screen and (min-width: ${({ theme }) => theme.media.xl}) {
        grid-area: 1 / 1 / 3 / 2;
        justify-self: center;
    }
`;

const Span = styled.span<SpanProps>`
    position: absolute;

    &::before {
        content: '';
        position: absolute;
        width: 250px;
        height: 400px;
        background-image: url(${({ secondImg }) => secondImg});
        background-size: 30%;
        background-position: center;
        background-repeat: no-repeat;
        transform: translateX(-50%);
        bottom: -300px;
        opacity: ${({ geo }) => (geo ? 1 : 0)};

        @media screen and (min-width: ${({ theme }) => theme.media.md}) {
            background-size: 50%;
            bottom: -350px;
        }

        @media screen and (min-width: ${({ theme }) => theme.media.xl}) {
            background-size: 70%;
            bottom: -450px;
        }
    }
`;

const Img = styled.img<ImgProps>`
    width: ${({ mobileWidth }) => mobileWidth};
    transform: scale(${({ active }) => (active ? 1 : 0)});

    @media screen and (min-width: ${({ theme }) => theme.media.md}) {
        width: ${({ tabletWidth }) => tabletWidth};
    }

    @media screen and (min-width: ${({ theme }) => theme.media.xl}) {
        width: ${({ desktopWidth }) => desktopWidth};
    }
`;
