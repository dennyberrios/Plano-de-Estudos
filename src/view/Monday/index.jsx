import ButtonLink from "../../components/ButtonLink";
import { Container } from "../../components/Container";
import { SectionMonday } from "./styles";

const Monday = () => {
    return (
        <Container>
            <SectionMonday>
                <h2>Objetivo</h2>
                <p>Desenvolver suas habilidades de compreensão e tradução em inglês, com um enfoque prático e acessível. A leitura é fundamental para expandir seu vocabulário e aprimorar sua capacidade de entender a estrutura do idioma.</p>

                <h2>Atividade Principal</h2>
                <div className="activity">
                    <p>Escolha um texto curto (como um artigo de notícias ou uma história curta) e leia-o. Utilize sites como <a href="https://www.bbc.co.uk/learningenglish" target="_blank">BBC Learning English</a> ou <a href="https://lingua.com" target="_blank">Lingua.com</a> para textos em diferentes níveis de dificuldade.</p>
                </div>

                <h2>Exercício</h2>
                <div className="activity">
                    <ol>
                        <li>Leia o texto em inglês.</li>
                        <li>Copie um trecho no seu caderno.</li>
                        <li>Escreva a tradução desse trecho logo abaixo, utilizando dicionários online como <a href="https://www.linguee.com" target="_blank">Linguee</a> ou <a href="https://reverso.net" target="_blank">Reverso Context</a> para esclarecer dúvidas.</li>
                    </ol>
                </div>

                <h2>Duração</h2>
                <p>1 hora.</p>

                <h2>Benefícios</h2>
                <p>Melhorar sua capacidade de compreender e traduzir o inglês, além de expandir seu vocabulário e aprimorar sua escrita.</p>

                <ButtonLink link={"/"}>Voltar ao Plano de Estudos</ButtonLink>
            </SectionMonday>
        </Container>
    );
}

export default Monday;