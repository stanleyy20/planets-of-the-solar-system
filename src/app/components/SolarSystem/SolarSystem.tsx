import { Orbits } from './Orbits/Orbits';

export const SolarSystem: React.FunctionComponent = () => {
    return (
        <div
            style={{
                color: 'white',
                textAlign: 'center',
                padding: '55px',
            }}>
            <Orbits />
        </div>
    );
};
