import styled from "styled-components";
import { Link } from "react-router-dom";

export const CustomLink = styled(Link)`
        display: inline-block;
        margin-top: 15px;
        padding: 10px 20px;
        background-color: ${function({$bg}) {return $bg}}; 
        color: ${function({$colorText}) {return $colorText}};
        text-decoration: none;
        border-radius: 4px;
        transition: background-color 0.2s;

    &:hover {
        background-color: ${function({$bgHover}) {return $bgHover}}; 
    }
`;