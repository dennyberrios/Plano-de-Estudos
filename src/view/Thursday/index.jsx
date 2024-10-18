import ButtonLink from "../../components/ButtonLink";
import { Container } from "../../components/Container";
import { SectionThursDay } from "./styles";

const Thursday = () => {
    return (
        <Container>
            <SectionThursDay>
                <h2>Objetivo</h2>
                <p>Melhorar a fluência e a pronúncia ao praticar a fala em inglês, utilizando recursos audiovisuais e autoavaliação.</p>

                <h2>Atividade Principal</h2>
                <div className="activity">
                    <p>Pratique a conversação e a pronúncia assistindo a vídeos ou ouvindo podcasts em inglês.</p>
                </div>

                <h2>Exercício</h2>
                <div className="activity">
                    <ol>
                        <li>Escolha um vídeo curto ou um podcast em inglês com legenda (pode ser no <a href="https://www.ted.com" target="_blank">TED Talks</a> ou em canais educacionais no <a href="https://www.youtube.com" target="_blank">YouTube</a>).</li>
                        <li>Assista ao vídeo e tente descrever em voz alta o que você entendeu. Isso ajudará na retenção e compreensão.</li>
                        <li>Se possível, grave sua fala e depois escute para comparar sua pronúncia com a do vídeo.</li>
                    </ol>
                </div>

                <h2>Duração</h2>
                <p>1 hora.</p>

                <h2>Benefícios</h2>
                <p>Aumentar a confiança ao falar em inglês e melhorar a habilidade de entender e reproduzir a pronúncia correta.</p>

                <h2>Recursos</h2>
                <p>Utilize plataformas como <a href="https://www.ted.com" target="_blank">TED Talks</a> e <a href="https://www.youtube.com" target="_blank">YouTube</a> para encontrar vídeos que te interessem.</p>

                <ButtonLink link={"/"}>Voltar ao Plano de Estudos</ButtonLink>
            </SectionThursDay>
        </Container>
    );
}

export default Thursday;