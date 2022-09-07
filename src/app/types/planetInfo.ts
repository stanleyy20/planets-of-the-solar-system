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
    properties: [
        {
            text: string;
            property: string;
        },
        {
            text: string;
            property: string;
        },
        {
            text: string;
            property: string;
        },
        {
            text: string;
            property: string;
        }
    ];
};
