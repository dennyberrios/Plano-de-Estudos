import PropTypes from "prop-types";
import { Card } from "./styles";
import ButtonLink from "../ButtonLink";
import { 
    cardLinkBackgroundColor, 
    cardLinkFontColor, 
    cardLinkHoverBackgroundColor 
} from "../UI/Color";

const Cards = ({ title, description, children, linkBtn, borderColor,  }) => {
    return ( 
        <Card $borderColor={borderColor}>
            <h3>{title}</h3>
            <p>{description}</p>
            <ButtonLink 
                link={linkBtn}
                $colorText={cardLinkFontColor}
                $bg={cardLinkBackgroundColor}
                $bgHover={cardLinkHoverBackgroundColor}
            >{children}</ButtonLink>
        </Card>
     );
}

Cards.propTypes = {
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    linkBtn: PropTypes.string.isRequired,
    borderColor: PropTypes.string,
}

export default Cards;

