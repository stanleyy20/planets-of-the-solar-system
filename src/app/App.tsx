import { ThemeProvider } from 'styled-components';
import { Navbar } from './components/Navbar/Navbar';
import { PlanetInfoScreen } from './components/PlanetInfoScreen/PlanetInfoScreen';
import { Wrapper } from './components/Wrapper/Wrapper';
import { theme } from './styles/AppTheme';
import { GlobalStyle } from './styles/globalStyles';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Wrapper>
                <Navbar />
                <PlanetInfoScreen />
            </Wrapper>
        </ThemeProvider>
    );
}

export default App;
