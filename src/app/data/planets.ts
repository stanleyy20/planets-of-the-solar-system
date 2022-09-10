import { PlanetInfo } from '../types/planetInfo';
import { Images } from '../assets/index';

const {
    Earth,
    EarthGeo,
    EarthInt,
    Jupiter,
    JupiterGeo,
    JupiterInt,
    Mars,
    MarsGeo,
    MarsInt,
    Mercury,
    MercuryGeo,
    MercuryInt,
    Neptune,
    NeptuneGeo,
    NeptuneInt,
    Saturn,
    SaturnGeo,
    SaturnInt,
    Uran,
    UranGeo,
    UranInt,
    Venus,
    VenusGeo,
    VenusInt,
} = Images;

export const PLANETS: Array<PlanetInfo> = [
    {
        name: 'Mercury',
        color: 'hsl(196,83%,93%)',
        overview: {
            content:
                "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
            source: 'https://en.wikipedia.org/wiki/Mercury_(planet)',
            image: Mercury,
        },
        structure: {
            content:
                "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",
            source: 'https://en.wikipedia.org/wiki/Mercury_(planet)#Internal_structure',
            image: MercuryInt,
        },
        geology: {
            content:
                "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
            source: 'https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology',
            image: Mercury,
            geo: MercuryGeo,
        },
        sectionColor: 'hsl(194, 48%, 49%)',
        desktopImgWidth: '290px',
        tabletImgWidth: '184px',
        mobileImgWidth: '111px',
        properties: [
            {
                text: 'ROTATION TIME',
                property: '58.6 Days',
            },
            {
                text: 'REVOLUTION TIME',
                property: '87.97 Days',
            },
            {
                text: 'RADIUS',
                property: '2,439.7 KM',
            },
            {
                text: 'AVERAGE TEMP',
                property: '430°c',
            },
        ],
        radius: '90px',
        orbitTime: 7.1867343561,
        planetSize: '10px',
        zIndex: 100,
    },
    {
        name: 'Venus',
        color: 'hsl(39,88%,73%)',
        overview: {
            content:
                "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
            source: 'https://en.wikipedia.org/wiki/Venus',
            image: Venus,
        },
        structure: {
            content:
                'The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.',
            source: 'https://en.wikipedia.org/wiki/Venus#Internal_structure',
            image: VenusInt,
        },
        geology: {
            content:
                'Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.',
            source: 'https://en.wikipedia.org/wiki/Venus#Surface_geology',
            image: Venus,
            geo: VenusGeo,
        },
        sectionColor: 'hsl(33, 82%, 61%)',
        desktopImgWidth: '400px',
        tabletImgWidth: '253px',
        mobileImgWidth: '154px',
        properties: [
            {
                text: 'ROTATION TIME',
                property: '243 Days',
            },
            {
                text: 'REVOLUTION TIME',
                property: '224.7 Days',
            },
            {
                text: 'RADIUS',
                property: '6,051.8 KM',
            },
            {
                text: 'AVERAGE TEMP',
                property: '471°c',
            },
        ],
        radius: '120px',
        orbitTime: 18.4555338265,
        planetSize: '13px',
        zIndex: 90,
    },
    {
        name: 'Earth',
        color: 'hsl(238,99%,66%)',
        overview: {
            content:
                "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
            source: 'https://en.wikipedia.org/wiki/Earth',
            image: Earth,
        },
        structure: {
            content: `"Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle."`,
            source: 'https://en.wikipedia.org/wiki/Earth#Internal_structure',
            image: EarthInt,
        },
        geology: {
            content:
                'The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.',
            source: 'https://en.wikipedia.org/wiki/Earth#Surface',
            image: Earth,
            geo: EarthGeo,
        },
        sectionColor: 'hsl(263, 67%, 51%)',
        desktopImgWidth: '450px',
        tabletImgWidth: '285px',
        mobileImgWidth: '173px',
        properties: [
            {
                text: 'ROTATION TIME',
                property: '0.99 Days',
            },
            {
                text: 'REVOLUTION TIME',
                property: '365.26 Days',
            },
            {
                text: 'RADIUS',
                property: '6,371 KM',
            },
            {
                text: 'AVERAGE TEMP',
                property: '16°c',
            },
        ],
        radius: '200px',
        orbitTime: 30,
        planetSize: '15px',
        zIndex: 80,
    },
    {
        name: 'Mars',
        color: 'hsl(12,100%,64%)',
        overview: {
            content:
                'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".',
            source: 'https://en.wikipedia.org/wiki/Mars',
            image: Mars,
        },
        structure: {
            content:
                'Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.',
            source: 'https://en.wikipedia.org/wiki/Mars#Internal_structure',
            image: MarsInt,
        },
        geology: {
            content:
                'Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.',
            source: 'https://en.wikipedia.org/wiki/Mars#Surface_geology',
            image: Mars,
            geo: MarsGeo,
        },
        sectionColor: 'hsl(10, 63%, 51%)',
        desktopImgWidth: '336px',
        tabletImgWidth: '213px',
        mobileImgWidth: '129px',
        properties: [
            {
                text: 'ROTATION TIME',
                property: '1.03 Days',
            },
            {
                text: 'REVOLUTION TIME',
                property: '1.88 Years',
            },
            {
                text: 'RADIUS',
                property: '3,389.5 KM',
            },
            {
                text: 'AVERAGE TEMP',
                property: '-28°c',
            },
        ],
        radius: '250px',
        orbitTime: 56.4261314589,
        planetSize: '11px',
        zIndex: 70,
    },
    {
        name: 'Jupiter',
        color: 'hsl(27,75%,70%)',
        overview: {
            content:
                'Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.',
            source: 'https://en.wikipedia.org/wiki/Jupiter',
            image: Jupiter,
        },
        structure: {
            content:
                "When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.",
            source: 'https://en.wikipedia.org/wiki/Jupiter#Internal_structure',
            image: JupiterInt,
        },
        geology: {
            content:
                'The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.',
            source: 'https://en.wikipedia.org/wiki/Jupiter#Great_Red_Spot_and_other_vortices',
            image: Jupiter,
            geo: JupiterGeo,
        },
        sectionColor: 'hsl(2, 68%, 53%)',
        desktopImgWidth: '582px',
        tabletImgWidth: '369px',
        mobileImgWidth: '224px',
        properties: [
            {
                text: 'ROTATION TIME',
                property: '9.93 Hours',
            },
            {
                text: 'REVOLUTION TIME',
                property: '11.86 Years',
            },
            {
                text: 'RADIUS',
                property: '69,911 KM',
            },
            {
                text: 'AVERAGE TEMP',
                property: '-108°c',
            },
        ],
        radius: '380px',
        orbitTime: 355.7228171013,
        planetSize: '40px',
        zIndex: 60,
    },

    {
        name: 'Saturn',
        color: 'hsl(40,96%,70%)',
        overview: {
            content:
                'Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.',
            source: 'https://en.wikipedia.org/wiki/Saturn',
            image: Saturn,
        },
        structure: {
            content:
                "Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.",
            source: 'https://en.wikipedia.org/wiki/Saturn#Internal_structure',
            image: SaturnInt,
        },
        geology: {
            content:
                "The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust.",
            source: 'https://en.wikipedia.org/wiki/Saturn#Atmosphere',
            image: Saturn,
            geo: SaturnGeo,
        },
        sectionColor: 'hsl(17, 73%, 46%)',
        desktopImgWidth: '666px',
        tabletImgWidth: '422px',
        mobileImgWidth: '256px',
        properties: [
            {
                text: 'ROTATION TIME',
                property: '10.8 Hours',
            },
            {
                text: 'REVOLUTION TIME',
                property: '29.46 Years',
            },
            {
                text: 'RADIUS',
                property: '58,232 KM',
            },
            {
                text: 'AVERAGE TEMP',
                property: '-138°c',
            },
        ],
        radius: '480px',
        orbitTime: 882.6952471456,
        planetSize: '38px',
        zIndex: 50,
    },
    {
        name: 'Uranus',
        color: 'hsl(168,82%,67%)',
        overview: {
            content:
                'Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.',
            source: 'https://en.wikipedia.org/wiki/Uranus',
            image: Uran,
        },
        structure: {
            content:
                "The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.",
            source: 'https://en.wikipedia.org/wiki/Uranus#Internal_structure',
            image: UranInt,
        },
        geology: {
            content:
                "The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.",
            source: 'https://en.wikipedia.org/wiki/Uranus#Atmosphere',
            image: Uran,
            geo: UranGeo,
        },
        sectionColor: 'hsl(169, 73%, 44%)',
        desktopImgWidth: '458px',
        tabletImgWidth: '290px',
        mobileImgWidth: '176px',
        properties: [
            {
                text: 'ROTATION TIME',
                property: '17.2 Hours',
            },
            {
                text: 'REVOLUTION TIME',
                property: '84 Years',
            },
            {
                text: 'RADIUS',
                property: '25,362 KM',
            },
            {
                text: 'AVERAGE TEMP',
                property: '-195°c',
            },
        ],
        radius: '550px',
        orbitTime: 2512.4001967933,
        planetSize: '18px',
        zIndex: 40,
    },
    {
        name: 'Neptune',
        color: 'hsl(222,95%,63%)',
        overview: {
            content:
                'Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.',
            source: 'https://en.wikipedia.org/wiki/Neptune',
            image: Neptune,
        },
        structure: {
            content:
                "Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.",
            source: 'https://en.wikipedia.org/wiki/Neptune#Internal_structure',
            image: NeptuneInt,
        },
        geology: {
            content:
                "Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.",
            source: 'https://en.wikipedia.org/wiki/Neptune#Atmosphere',
            image: Neptune,
            geo: NeptuneGeo,
        },
        sectionColor: 'hsl(222, 87%, 56%)',
        desktopImgWidth: '450px',
        tabletImgWidth: '285px',
        mobileImgWidth: '173px',
        properties: [
            {
                text: 'ROTATION TIME',
                property: '16.08 Hours',
            },
            {
                text: 'REVOLUTION TIME',
                property: '164.79 Years',
            },
            {
                text: 'RADIUS',
                property: '24,622 KM',
            },
            {
                text: 'AVERAGE TEMP',
                property: '-201°c',
            },
        ],
        radius: '650px',
        orbitTime: 4911.7838624549,
        planetSize: '18px',
        zIndex: 30,
    },
];
