import styled from "styled-components";
import { 
    backgroundColor, 
    buttonTextColor, 
    buttonTextHover, 
    cardLinkFontColor, 
    fontSecondaryColor, 
    highlightFontColor, 
    introBoxShadowColor 
} from "../../components/UI/Color";
import { fontFamilyArial } from "../../components/UI/Font";

export const SectionTips = styled.section`
    max-width: 800px;
    margin: 40px auto;
    padding: 20px;
    background-color: ${cardLinkFontColor};
    border-radius: 8px;
    box-shadow: 0 4px 10px ${introBoxShadowColor};
    
    font-family: ${fontFamilyArial};
    
    h2 {
        color: ${highlightFontColor};
    }

    p {
        line-height: 1.6;
        color: ${fontSecondaryColor};
    }

    .activity {
        border-left: 5px solid ${highlightFontColor};
        padding-left: 15px;
        margin: 15px 0;
        background-color: ${backgroundColor};
    }

    a {
        display: inline-block;
        margin-top: 15px;
        padding: 10px 20px;
        background-color: ${buttonTextColor};
        color: ${cardLinkFontColor};
        text-decoration: none;
        border-radius: 4px;
        transition: background-color 0.2s;
    }

    a:hover {
        background-color: ${buttonTextHover};
    }
`;