import ButtonLink from "../../components/ButtonLink";
import { buttonTextColor, buttonTextHover, cardLinkFontColor } from "../../components/UI/Color";
import { Container, Message, Title } from "./styles";

const NotFound = () => {
    return (
        <Container>
            <Title>Página Não Encontrada (404)</Title>
            <Message>Desculpe, mas a página que você está procurando não existe.</Message>
            <Message>Você pode voltar à página inicial ou verificar a URL.</Message>
            <ButtonLink $bgHover={buttonTextHover} $bg={buttonTextColor} $colorText={cardLinkFontColor} link={"/"}>Voltar para a Página Inicial</ButtonLink>
        </Container>
    );
};

export default NotFound;