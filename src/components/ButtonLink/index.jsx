import PropTypes from "prop-types";
import { CustomLink } from "./styles";

const ButtonLink = ({ children, link, $colorText, $bg, $bgHover }) => {
    return (
        <CustomLink
            to={link}
            $colorText={$colorText}
            $bg={$bg}
            $bgHover={$bgHover}
        >
            {children}
        </CustomLink>
    );
}

ButtonLink.propTypes = {
    children: PropTypes.node,
    link: PropTypes.string,
    $colorText: PropTypes.string,
    $bg: PropTypes.string,
    $bgHover: PropTypes.string,
}

export default ButtonLink;