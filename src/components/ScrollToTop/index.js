import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // define o scroll no topo
    }, [pathname]); // Executa sempre que o pathname mudar

    return null;
};

export default ScrollToTop;
