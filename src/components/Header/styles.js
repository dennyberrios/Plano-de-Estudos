import styled from "styled-components";
import { fontFamilyArial } from "../UI/Font";
import { 
    headerBackgroundColor,
    headerFontColor 
} from "../UI/Color";

export const ContentHeader = styled.header`
    width: 100%;
    background-color: ${headerBackgroundColor};

    display: inline-block;
    font-family: ${fontFamilyArial};
    color: ${headerFontColor};

    text-align: center;

    padding: 40px 0;
    border-bottom: 4px solid ${function({$borderColor}) {return $borderColor}};

    h1 {
        margin: 0;
        font-size: 3em; 
        letter-spacing: 2px;
        padding: 0 10px;
    }

    p {
        font-size: 1.2em;
        margin-top: 10px;
        font-weight: 300;
        padding: 0 10px;
    }


    /* Para telas pequenas (celulares) */
    @media (max-width: 600px) {
        h1 {
            margin: 0;
            font-size: 1.7rem; 
            letter-spacing: 2px;
        }

        p {
            font-size: 1.1em;
            margin-top: 10px;
            font-weight: 300;
        }
    }

    /* Para telas médias (tablets) */
    @media (min-width: 601px) and (max-width: 1024px) {
        h1 {
            margin: 0;
            font-size: 2em; 
            letter-spacing: 2px;
        }

        p {
            font-size: 1.2em;
            margin-top: 10px;
            font-weight: 300;
        }
    }

    /* Para telas grandes (desktop) */
    @media (min-width: 1025px) {
        h1 {
            margin: 0;
            font-size: 3em; 
            letter-spacing: 2px;
        }

        p {
            font-size: 1.2em;
            margin-top: 10px;
            font-weight: 300;
        }
    }
`;