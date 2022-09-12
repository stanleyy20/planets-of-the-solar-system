import { createGlobalStyle } from 'styled-components';
import { theme as appTheme } from '../types/theme';
import { starsBackground } from './starsBackground';

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
         overflow-x: hidden;

       
            ::-webkit-scrollbar {
            width: 10px;        
            }


            ::-webkit-scrollbar-track {
            background: transparent;
            }


            ::-webkit-scrollbar-thumb {
            background: rgba(0,0,0, 1);
            border-radius: 20px;
    
            }


            ::-webkit-scrollbar-thumb:hover {
            background: rgba(0,0,0, 1)
            }

            &::after {
        content: '';
        position: absolute;
        height: 2px;
        width: 2px;
        top: -2px;
        background: white;
        box-shadow: ${starsBackground};
        border-radius: 100px;
    }
    }
`;
