import ButtonLink from "../../components/ButtonLink";
import { Container } from "../../components/Container";
import { SectionSaturday } from "../Saturday/styles";

const Sunday = () => {
    return (
        <Container>
            <SectionSaturday>
                <h2>Objetivo</h2>
                <p>O domingo é um dia para relaxar e recarregar as energias, mas também é uma boa oportunidade para revisar o que você aprendeu durante a semana.</p>

                <h2>Atividade Principal</h2>
                <div className="activity">
                    <p>Use este dia para revisar suas anotações, refletir sobre o que funcionou bem durante a semana e o que pode ser melhorado.</p>
                </div>

                <h2>Exercício</h2>
                <div className="activity">
                    <ol>
                        <li>Releia suas anotações da semana e identifique os pontos que você dominou.</li>
                        <li>Escute novamente a música da terça-feira e tente perceber mais detalhes que antes não notou.</li>
                        <li>Revise os exercícios de gramática da quarta-feira e faça mais um para consolidar o aprendizado.</li>
                        <li>Se sentir vontade, faça uma atividade que você gostou durante a semana ou comece algo novo, como um podcast ou um vídeo em inglês.</li>
                    </ol>
                </div>

                <h2>Duração</h2>
                <p>1 hora ou mais, dependendo do que você deseja revisar.</p>

                <h2>Benefícios</h2>
                <p>A revisão ajuda a consolidar o aprendizado, reforça o conhecimento e prepara você para os desafios da próxima semana.</p>

                <h2>Sugestões Finais</h2>
                <p>Se você se sentir cansado, não hesite em descansar. O aprendizado de um novo idioma é um maratona, não uma corrida de velocidade.</p>

                <ButtonLink link={"/"}>Voltar ao Plano de Estudos</ButtonLink>
            </SectionSaturday>
        </Container>
    );
}

export default Sunday;