import ButtonLink from "../../components/ButtonLink";
import { Container } from "../../components/Container";
import { SectionWednesDay } from "./styles";

const Wednesday = () => {
    return (
        <Container>
            <SectionWednesDay>
                <h2>Objetivo</h2>
                <p>Refinar seus conhecimentos gramaticais e desenvolver sua habilidade de escrita, utilizando exercícios práticos e redação criativa.</p>

                <h2>Atividade Principal</h2>
                <div className="activity">
                    <p>Pratique gramática com exercícios online e escreva um pequeno texto aplicando os conceitos aprendidos.</p>
                </div>

                <h2>Exercício</h2>
                <div className="activity">
                    <ol>
                        <li>Acesse sites como <a href="https://www.englishexercises.org" target="_blank">Englishexercises.org</a> ou <a href="https://learnenglish.britishcouncil.org" target="_blank">British Council LearnEnglish</a> para fazer exercícios sobre tempos verbais, preposições ou artigos.</li>
                        <li>Após concluir os exercícios, escreva um pequeno texto (5 a 10 frases) sobre o que você fez ontem ou seus planos para o próximo fim de semana.</li>
                    </ol>
                </div>

                <h2>Duração</h2>
                <p>1 hora.</p>

                <h2>Benefícios</h2>
                <p>Fixar conceitos gramaticais e desenvolver sua capacidade de escrita, facilitando a expressão de ideias em inglês.</p>

                <h2>Recursos</h2>
                <p>Utilize sites como <a href="https://www.englishexercises.org" target="_blank">Englishexercises.org</a> e <a href="https://learnenglish.britishcouncil.org" target="_blank">British Council</a> para prática adicional.</p>

                <ButtonLink link={"/"}>Voltar ao Plano de Estudos</ButtonLink>
            </SectionWednesDay>
        </Container>
    );
}

export default Wednesday;