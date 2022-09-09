import { ThemeProvider } from 'styled-components';
import { Navbar } from './components/Navbar/Navbar';
import { Wrapper } from './components/Wrapper/Wrapper';
import { theme } from './styles/AppTheme';
import { GlobalStyle } from './styles/globalStyles';
import { AnimatedRoutes } from './components/AnimatedRoutes/AnimatedRoutes';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Wrapper>
                <Navbar />
                <AnimatedRoutes />
            </Wrapper>
        </ThemeProvider>
    );
}

export default App;
