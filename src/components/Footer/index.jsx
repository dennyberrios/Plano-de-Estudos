import { MdEmail } from "react-icons/md";
import {
    Copyright,
    FooterWrapper,
    SocialIcons,
    SocialLink
} from "./styles";
import {
    FaGithub,
    FaInstagram,
    FaLinkedin
} from 'react-icons/fa';

const Footer = () => {
    return (
        <FooterWrapper>
            <Copyright>
                <p>&copy; 2024 Portal de Aprendizado de Inglês. Todos os direitos reservados.</p>
                <p>Página desenvolvida por <strong>Danny Berrios</strong></p>
            </Copyright>

            <SocialIcons>
                <SocialLink href="https://github.com/dennyberrios" target="_blank" aria-label="Facebook">
                    <FaGithub />
                </SocialLink>
                <SocialLink href="https://www.linkedin.com/in/danny-berrios/" target="_blank" aria-label="LinkedIn">
                    <FaLinkedin />
                </SocialLink>
                <SocialLink href="https://www.instagram.com/berrios_danny30/" target="_blank" aria-label="Instagram">
                    <FaInstagram />
                </SocialLink>
                <SocialLink href="email:denny_berrios@hotmail.com" target="_blank" aria-label="Instagram">
                    <MdEmail />
                </SocialLink>
            </SocialIcons>
        </FooterWrapper>
    );
}

export default Footer;