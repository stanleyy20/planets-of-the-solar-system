export type PlanetInfo = {
    name: string;
    color: string;
    overview: {
        content: string;
        source: string;
        image: string;
    };
    structure: {
        content: string;
        source: string;
        image: string;
    };
    geology: {
        content: string;
        source: string;
        image: string;
        geo: string;
    };
    sectionColor: string;
    desktopImgWidth: string;
    tabletImgWidth: string;
    mobileImgWidth: string;
    rotation: string;
    revolution: string;
    radius: string;
    temperature: string;
};
