import styled from "styled-components";
import { 
    highlightFontColor, 
    introBackgroundColor, 
    introBoxShadowColor 
} from "../../components/UI/Color";

export const SectionIntro = styled.section`
    width: auto;
    height: auto;
    margin: 0 10px;

    .intro {
        text-align: center;
        margin: 0 10px;
        font-size: 1.1em;
        max-width: 800px;
        padding: 20px; 
        background: ${introBackgroundColor}; 
        border-radius: 8px; 
        box-shadow: 0 4px 8px ${introBoxShadowColor};
    }

    .intro h2 {
        color: ${highlightFontColor}; 
        font-size: 2em; 
        margin-top: 20px; 
        margin-bottom: 10px; 
    }

    /* Para telas pequenas (celulares) */
    @media (max-width: 600px) {
        .intro h2 {
            color: ${highlightFontColor}; 
            font-size: 1.5em; 
            margin-top: 20px; 
            margin-bottom: 10px; 
        }
    }

    /* Para telas médias (tablets) */
    @media (min-width: 601px) and (max-width: 1024px) {
        .intro h2 {
            color: ${highlightFontColor}; 
            font-size: 1.7em; 
            margin-top: 20px; 
            margin-bottom: 10px; 
        }
    }

    /* Para telas grandes (desktop) */
    @media (min-width: 1025px) {
        .intro h2 {
            color: ${highlightFontColor}; 
            font-size: 2em; 
            margin-top: 20px; 
            margin-bottom: 10px; 
        }
    }
`;

export const SectionCards = styled.section`
    width: auto;
    height: auto;
    margin: 0 10px;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    margin: 40px 0;
    padding: 20px 10px;
`;