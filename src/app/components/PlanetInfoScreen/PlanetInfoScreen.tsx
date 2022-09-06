import { Route, Routes } from 'react-router-dom';

import { PLANETS } from '../../data/planets';
import { PlanetItem } from './PlanetItem';

export const PlanetInfoScreen: React.FunctionComponent = () => {
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
