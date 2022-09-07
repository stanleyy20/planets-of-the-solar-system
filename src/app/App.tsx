import { ThemeProvider } from 'styled-components';
import { Navbar } from './components/Navbar/Navbar';
import { PlanetScreen } from './components/PlanetScreen/PlanetScreen';
import { Wrapper } from './components/Wrapper/Wrapper';
import { theme } from './styles/AppTheme';
import { GlobalStyle } from './styles/globalStyles';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Wrapper>
                <Navbar />
                <PlanetScreen />
            </Wrapper>
        </ThemeProvider>
    );
}

export default App;
