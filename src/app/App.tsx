import { ThemeProvider } from 'styled-components';
import { Navbar } from './components/Navbar/Navbar';
import { Wrapper } from './components/Wrapper/Wrapper';
import { theme } from './styles/AppTheme';
import { GlobalStyle } from './styles/globalStyles';
import { Route, Routes } from 'react-router-dom';
import { SolarSystem } from './components/SolarSystem/SolarSystem';
import { PLANETS } from './data/planets';
import { PlanetItem } from './components/PlanetInfo/PlanetInfo';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Wrapper>
                <Navbar />
                <Routes>
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
            </Wrapper>
        </ThemeProvider>
    );
}

export default App;
