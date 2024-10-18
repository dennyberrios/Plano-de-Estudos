import { useLocation } from "react-router-dom";
import { ContentHeader } from "./styles";
import { getHeaderTitle } from "../../utils/ getHeaderTitle.jsx";
import { headerBorderColor } from "../UI/Color/index.js";

const Header = () => {
    const { pathname } = useLocation();

    return (
        <ContentHeader $borderColor={(pathname === "/") && headerBorderColor}>
            {getHeaderTitle(pathname)}
        </ContentHeader>
    );
}

export default Header;