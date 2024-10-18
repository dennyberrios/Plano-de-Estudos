import ButtonLink from "../../components/ButtonLink";
import { Container } from "../../components/Container";
import { SectionSaturday } from "./styles";

const Saturday = () => {
    return (
        <Container>
            <SectionSaturday>
                <h2>Objetivo</h2>
                <p>Aproveitar o sábado para consumir conteúdo em inglês de forma divertida, relaxada e sem pressão.</p>

                <h2>Atividade Principal</h2>
                <div className="activity">
                    <p>Tire o dia para assistir a um filme ou série em inglês, ou escute um podcast interessante que envolva temas do seu interesse.</p>
                </div>

                <h2>Exercício</h2>
                <div className="activity">
                    <ol>
                        <li>Escolha um filme ou série em inglês com legendas em inglês.</li>
                        <li>Assista a um episódio ou a metade de um filme. Tente prestar atenção ao diálogo e às expressões usadas.</li>
                        <li>Se possível, escreva um pequeno resumo do que você assistiu em inglês, focando nos pontos principais.</li>
                        <li>Explore um podcast sobre programação ou outro tema que você gosta, e anote novas palavras ou expressões.</li>
                    </ol>
                </div>

                <h2>Duração</h2>
                <p>1 a 2 horas (sem pressão).</p>

                <h2>Benefícios</h2>
                <p>Assistir a conteúdos em inglês ajuda na imersão no idioma, melhora a compreensão auditiva e ensina novas expressões e vocabulário.</p>

                <h2>Recursos</h2>
                <p>Utilize plataformas como Netflix, Prime Video, Spotify e YouTube para acessar filmes, séries e podcasts.</p>

                <ButtonLink link={"/"}>Voltar ao Plano de Estudos</ButtonLink>
            </SectionSaturday>
        </Container>
    );
}

export default Saturday;