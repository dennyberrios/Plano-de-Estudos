import { createGlobalStyle } from 'styled-components';
import { backgroundColor, fontPrimaryColor } from '../Color';
import { fontFamilyArial } from '../Font';

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        outline: none;
        text-decoration: none;
        background-color: ${backgroundColor};
        
        font-family: ${fontFamilyArial};
        line-height: 1.6;
        color: ${fontPrimaryColor}; 
    }
`;