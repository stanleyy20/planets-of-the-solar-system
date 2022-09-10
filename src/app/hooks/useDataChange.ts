import { useState } from 'react';
import { PlanetInfo } from '../types/planetInfo';
import { Tabs } from '../types/tabs';
import { TAB_TYPE } from '../data/tabsData';

export const useDataChange = (planet: PlanetInfo) => {
    const { GEOLOGY_TAB, OVERVIEW_TAB, STRUCTURE_TAB } = TAB_TYPE;

    const [isAnimated, setIsAnimated] = useState<boolean>(false);

    const [structureTab, setStructureTab] = useState<boolean>(false);
    const [geologyTab, setGeologyTab] = useState<boolean>(false);
    const [currentTab, setCurrentTab] = useState<string>(OVERVIEW_TAB);

    const planetImgSrc = structureTab ? planet.structure.image : planet.overview.image;

    const planetInfo =
        !geologyTab && !structureTab
            ? planet.overview.content
            : geologyTab
            ? planet.geology.content
            : planet.structure.content;

    const changeTab = (tab: Tabs) => {
        if (tab.type === OVERVIEW_TAB) {
            setTimeout(() => {
                setStructureTab(false);
                setGeologyTab(false);
            }, 1000);

            setCurrentTab(tab.type);
        }

        if (tab.type === STRUCTURE_TAB) {
            setTimeout(() => {
                setStructureTab(true);
                setGeologyTab(false);
            }, 1000);

            setCurrentTab(tab.type);
        }

        if (tab.type === GEOLOGY_TAB) {
            setTimeout(() => {
                setStructureTab(false);
                setGeologyTab(true);
            }, 1000);

            setCurrentTab(tab.type);
        }
    };

    const handleOnClick = (tab: Tabs) => {
        if (tab.type === currentTab) return;

        setIsAnimated(true);

        setTimeout(() => {
            setIsAnimated(false);
        }, 2000);

        changeTab(tab);
    };

    return {
        planetImgSrc,
        planetInfo,
        isAnimated,
        handleOnClick,
        currentTab,
        geologyTab,
        structureTab,
    };
};
