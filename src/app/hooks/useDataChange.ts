import { SyntheticEvent, useState } from 'react';
import { SyntheticExpression } from 'typescript';
import { PlanetInfo } from '../types/planetInfo';
import { TabsType } from '../types/tabs';

export const useDataChange = (planet: PlanetInfo) => {
    const [geo, setGeo] = useState<boolean>(false);
    const [int, setInt] = useState<boolean>(false);
    const [animate, setAnimate] = useState<boolean>(false);
    const [activeButton, setActiveButton] = useState<string>('01');

    const src = !int ? planet.overview.image : planet.structure.image;

    const content =
        !geo && !int
            ? planet.overview.content
            : geo
            ? planet.geology.content
            : planet.structure.content;

    const changePlanetInfo = () => {
        setTimeout(() => {
            console.log('hello');
        }, 1000);
    };

    const changeImg = (button: TabsType, event: SyntheticEvent) => {
        if (activeButton === button.id) return;

        if (button.id === '01') {
            setActiveButton(button.id);
        }

        if (button.id === '02') {
            setInt(true);
            setActiveButton(button.id);
        } else {
            setInt(false);
        }

        if (button.id === '03') {
            setGeo(true);
            setActiveButton(button.id);
        } else {
            setGeo(false);
        }
    };

    const handleOnClick = (button: TabsType, event: SyntheticEvent) => {
        if (button.id === activeButton) return;

        setAnimate(true);

        changePlanetInfo();

        setTimeout(() => {
            setAnimate(false);
        }, 2000);

        changeImg(button, event);
    };

    return {
        src,
        geo,
        animate,
        content,
        handleOnClick,
        activeButton,
    };
};
