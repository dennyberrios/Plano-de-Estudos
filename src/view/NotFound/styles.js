import styled from 'styled-components';
import { fontPrimaryColor, highlightFontColor } from '../../components/UI/Color';
import { fontFamilyArial } from '../../components/UI/Font';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
    margin: 0;
    padding: 0;

    font-family: ${fontFamilyArial};

    a {
        margin-top: 30px;
    }
`;

export const Title = styled.h1`
    margin: 0 10px;
    color: ${highlightFontColor};

    /* Para telas pequenas (celulares) */
    @media (max-width: 600px) {
        font-size: 1.7rem;
    }

    /* Para telas médias (tablets) */
    @media (min-width: 601px) and (max-width: 1024px) {
        font-size: 2.5rem;
    }

    /* Para telas grandes (desktop) */
    @media (min-width: 1025px) {
        font-size: 3rem;
    }
`;

export const Message = styled.p`
    margin: 0px 10px;
    color: ${fontPrimaryColor};

    /* Para telas pequenas (celulares) */
    @media (max-width: 600px) {
        font-size: 1.1rem;
    }

    /* Para telas médias (tablets) */
    @media (min-width: 601px) and (max-width: 1024px) {
        font-size: 1.1rem;
    }

    /* Para telas grandes (desktop) */
    @media (min-width: 1025px) {
        font-size: 1.2rem;
    }
`;


