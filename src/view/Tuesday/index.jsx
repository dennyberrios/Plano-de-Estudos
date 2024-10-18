import ButtonLink from "../../components/ButtonLink";
import { Container } from "../../components/Container";
import { SectionTuesDay } from "./styles";

const Tuesday = () => {
    return (
        <Container>
            <SectionTuesDay>
                <h2>Objetivo</h2>
                <p>Aprimorar sua compreensão auditiva associando sons a palavras, utilizando músicas que você gosta. A música é uma ferramenta poderosa para aprender novos vocabulários e melhorar a pronúncia.</p>

                <h2>Atividade Principal</h2>
                <div className="activity">
                    <p>Escolha uma música em inglês de um artista que você gosta (exemplo: Ed Sheeran, Adele) e ouça-a. Tente selecionar músicas com letras claras para facilitar a compreensão.</p>
                </div>

                <h2>Exercício</h2>
                <div className="activity">
                    <ol>
                        <li>Ouça a música sem ler a letra.</li>
                        <li>Depois, busque a letra online e ouça novamente, acompanhando a leitura.</li>
                        <li>Traduza trechos da música para o português em seu caderno.</li>
                    </ol>
                </div>

                <h2>Duração</h2>
                <p>1 hora.</p>

                <h2>Benefícios</h2>
                <p>Melhora sua compreensão auditiva e a habilidade de associar sons a palavras, tornando o aprendizado mais natural e divertido.</p>

                <h2>Recursos</h2>
                <p>Use plataformas como <a href="https://lyricstraining.com" target="_blank">LyricsTraining</a> ou <a href="https://www.youtube.com" target="_blank">YouTube</a> para encontrar letras e vídeos com legendas.</p>

                <ButtonLink link={"/"}>Voltar ao Plano de Estudos</ButtonLink>
            </SectionTuesDay>
        </Container>
    );
}

export default Tuesday;