import ButtonLink from "../../components/ButtonLink";
import { Container } from "../../components/Container";
import { SectionFriDay } from "./styles";

const Friday = () => {
    return (
        <Container>
            <SectionFriDay>
                <h2>Objetivo</h2>
                <p>Consolidar o aprendizado da semana, revisando os conteúdos e práticas realizadas ao longo dos dias.</p>

                <h2>Atividade Principal</h2>
                <div className="activity">
                    <p>Revisar tudo o que você aprendeu durante a semana, assegurando que você se sinta confortável com os novos conceitos.</p>
                </div>

                <h2>Exercício</h2>
                <div className="activity">
                    <ol>
                        <li>Releia suas anotações da atividade de leitura e tradução da segunda-feira.</li>
                        <li>Escute novamente a música que você praticou na terça-feira e veja se consegue entender mais trechos.</li>
                        <li>Faça um exercício de gramática para reforçar o que aprendeu na quarta-feira.</li>
                        <li>Pratique descrever sua semana em inglês, utilizando novas palavras e estruturas que você aprendeu.</li>
                    </ol>
                </div>

                <h2>Duração</h2>
                <p>1 hora.</p>

                <h2>Benefícios</h2>
                <p>A revisão é fundamental para a retenção do conhecimento e para identificar áreas que precisam de mais atenção.</p>

                <h2>Recursos</h2>
                <p>Utilize suas anotações, a música que escolheu e sites de gramática para reforçar seu aprendizado.</p>

                <ButtonLink link={"/"}>Voltar ao Plano de Estudos</ButtonLink>
            </SectionFriDay>
        </Container>
    );
}

export default Friday;