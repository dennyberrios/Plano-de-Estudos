import styled from "styled-components";
import { 
    cardBackgroundColor,
    fontSecondaryColor, 
    highlightFontColor, 
    introBoxShadowColor 
} from "../UI/Color";

export const Card = styled.div `
    background-color: ${cardBackgroundColor};
    width: 300px;
    min-height: 270px;
    margin: 20px;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    transition: transform 0.2s, box-shadow 0.2s;
    position: relative;
    border-top: 5px solid ${function({ $borderColor }) {return $borderColor ? $borderColor : "transparent"}};

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 12px 20px ${introBoxShadowColor};
    }

    h3 {
        color: ${highlightFontColor}; 
        margin-bottom: 15px;
        font-weight: 600; 
        font-size: 1.5em; 
    }

    p {
        font-size: 1em;
        color: ${fontSecondaryColor}; 
    }

    a {
        font-weight: bold; 

        position: absolute;
        bottom: 30px;
        left: 50%;
        transform: translate(-50%);
    }

    /* Para telas pequenas (celulares) */
    @media (max-width: 600px) {
        h3 {
            font-size: 1.3em; 
        }
    }

    /* Para telas médias (tablets) */
    @media (min-width: 601px) and (max-width: 1024px) {
        h3 {
            font-size: 1.3em; 
        }
    }

    /* Para telas grandes (desktop) */
    @media (min-width: 1025px) {
        h3 {
            font-size: 1.5em; 
        }
    }
`;