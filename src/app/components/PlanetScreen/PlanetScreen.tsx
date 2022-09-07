import { Route, Routes } from 'react-router-dom';

import { PLANETS } from '../../data/planets';
import { PlanetItem } from '../PlanetInfo/PlanetInfo';

export const PlanetScreen: React.FunctionComponent = () => {
    return (
        <Routes>
            {PLANETS.map((planet) => (
                <Route
                    path={planet.name}
                    element={<PlanetItem planet={planet} />}
                    key={planet.color}
                />
            ))}
        </Routes>
    );
};
