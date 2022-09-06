import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from './styles/AppTheme';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <div className='App'>hello</div>
        </ThemeProvider>
    );
}

export default App;
