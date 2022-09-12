import { ThemeProvider } from 'styled-components';
import { Navbar } from './components/Navbar/Navbar';
import { Wrapper } from './components/Wrapper/Wrapper';
import { theme } from './styles/AppTheme';
import { GlobalStyle } from './styles/globalStyles';
import { AnimatedRoutes } from './components/AnimatedRoutes/AnimatedRoutes';
import { useState } from 'react';

function App() {
    const [activePlanet, setActivePlanet] = useState<string>('/');

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Wrapper>
                <Navbar setActivePlanet={setActivePlanet} />
                <AnimatedRoutes activePlanet={activePlanet} />
            </Wrapper>
        </ThemeProvider>
    );
}

export default App;
