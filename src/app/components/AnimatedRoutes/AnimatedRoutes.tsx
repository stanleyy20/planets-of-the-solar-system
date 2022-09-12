import { Route, Routes, useLocation } from 'react-router-dom';
import { PLANETS } from '../../data/planets';
import { Planet } from '../Planet/Planet';
import { SolarSystem } from '../SolarSystem/SolarSystem';
import { AnimatePresence } from 'framer-motion';

type AnimatedRoutesProps = {
    activePlanet: string;
};

export const AnimatedRoutes: React.FunctionComponent<AnimatedRoutesProps> = ({ activePlanet }) => {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<SolarSystem activePlanet={activePlanet} />} />
                {PLANETS.map((planet) => {
                    return <Route path={planet.name} element={<Planet planet={planet} />} key={planet.color} />;
                })}
            </Routes>
        </AnimatePresence>
    );
};
