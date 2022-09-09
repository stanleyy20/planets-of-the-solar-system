import { createGlobalStyle } from 'styled-components';
import { theme as appTheme } from '../types/theme';

export const GlobalStyle = createGlobalStyle<{ theme: appTheme }>`
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: ${({ theme }) => theme.fonts.primary};
        background-color: ${({ theme }) => theme.colors.black} ;
        height: 101vh;
    }
`;
