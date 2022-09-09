import { Route, Routes, useLocation } from 'react-router-dom';
import { PLANETS } from '../../data/planets';
import { PlanetItem } from '../PlanetInfo/PlanetInfo';
import { SolarSystem } from '../SolarSystem/SolarSystem';
import { AnimatePresence } from 'framer-motion';

// 'framer-motion/dist/frame-motion';

export const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<SolarSystem />} />
                {PLANETS.map((planet) => {
                    return (
                        <Route
                            path={planet.name}
                            element={<PlanetItem planet={planet} />}
                            key={planet.color}
                        />
                    );
                })}
            </Routes>
        </AnimatePresence>
    );
};
