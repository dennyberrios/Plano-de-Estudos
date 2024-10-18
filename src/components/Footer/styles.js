import styled from "styled-components";
import { 
    buttonTextColor, 
    footerBackgroundColor, 
    footerFontColor 
} from "../UI/Color";
import { fontFamilyArial} from "../UI/Font";

export const FooterWrapper = styled.footer`
    width: 100%;
    height: 140px;
    background-color: ${footerBackgroundColor};

    font-family: ${fontFamilyArial};
    color: ${footerFontColor};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Copyright = styled.div`
    font-size: 14px;
    margin-bottom: 10px;
    text-align: center;

    p {
        margin: 5px 10px;
    }
`;

export const SocialIcons = styled.div`
    display: flex;
    gap: 20px;
`;

export const SocialLink = styled.a`
    color: ${footerFontColor};
    font-size: 24px;
    transition: color 0.2s ease;

    &:hover {
        color: ${buttonTextColor};
    }
`;