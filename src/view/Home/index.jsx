import { useLocation } from "react-router-dom";
import Cards from "../../components/Cards";
import { Container } from "../../components/Container";
import {
    cardBorderColorFriday,
    cardBorderColorMonday,
    cardBorderColorSaturday,
    cardBorderColorSunday,
    cardBorderColorThursday,
    cardBorderColorTips,
    cardBorderColorTuesday,
    cardBorderColorWednesday
} from "../../components/UI/Color";
import { SectionCards, SectionIntro } from './styles'
import { useEffect } from "react";
import { useUserContext } from "../../Context";

const Home = () => {

    const { pathname } = useLocation();
    const { setIsValidPath } = useUserContext()
    useEffect(() => {
        setIsValidPath(pathname)
    }, [pathname, setIsValidPath]);

    return (
        <Container>
            <SectionIntro>
                <div className="intro">
                    <h2>Por que Aprender Inglês?</h2>
                    <p>O inglês é a língua franca global, abrindo portas para oportunidades em diversas áreas, como negócios, tecnologia e cultura. Com o domínio do inglês, você poderá acessar um vasto leque de informações, se conectar com pessoas ao redor do mundo e ampliar suas perspectivas profissionais.</p>

                    <h2>Benefícios dos Nossos Métodos</h2>
                    <p>Adotamos uma abordagem multifacetada que integra leitura, escuta, fala e escrita. Ao utilizar músicas, filmes e exercícios práticos, garantimos que o aprendizado seja não apenas eficaz, mas também prazeroso. Nossa metodologia incentiva a prática constante, ajudando você a se sentir mais confiante e fluente no uso do idioma.</p>
                </div>
            </SectionIntro>
            <SectionCards>
                <Cards
                    title="Segunda-feira: Leitura e Tradução"
                    description="Desenvolva suas habilidades de leitura e tradução com textos curtos e exercícios práticos."
                    linkBtn="/monday"
                    borderColor={cardBorderColorMonday}
                >
                    Saiba mais
                </Cards>
                <Cards
                    title="Terça-feira: Escuta com Músicas"
                    description="Melhore sua compreensão auditiva escutando músicas e traduzindo suas letras favoritas."
                    linkBtn="/tuesday"
                    borderColor={cardBorderColorTuesday}
                >
                    Saiba mais
                </Cards>
                <Cards
                    title="Quarta-feira: Gramática e Escrita"
                    description="Refine sua gramática e pratique sua escrita com exercícios simples e diretos."
                    linkBtn="/wednesday"
                    borderColor={cardBorderColorWednesday}
                >
                    Saiba mais
                </Cards>
                <Cards
                    title="Quinta-feira: Conversação e Pronúncia"
                    description="Treine sua fluência e pronúncia com atividades de conversação e vídeos interativos."
                    linkBtn="/thursday"
                    borderColor={cardBorderColorThursday}
                >
                    Saiba mais
                </Cards>
                <Cards
                    title="Sexta-feira: Revisão Geral"
                    description="Consolide seu aprendizado revisando o conteúdo da semana e se prepare para novos desafios."
                    linkBtn="/friday"
                    borderColor={cardBorderColorFriday}
                >
                    Saiba mais
                </Cards>
                <Cards
                    title="Sábado: Diversão em Inglês"
                    description="Desfrute de filmes, séries e podcasts em inglês para praticar de forma descontraída."
                    linkBtn="/saturday"
                    borderColor={cardBorderColorSaturday}
                >
                    Saiba mais
                </Cards>
                <Cards
                    title="Domingo: Dia Livre"
                    description="Descanse ou refaça atividades que você mais gostou durante a semana."
                    linkBtn="/sunday"
                    borderColor={cardBorderColorSunday}
                >
                    Saiba mais
                </Cards>
                <Cards
                    title="Dicas: Métodos de Leitura e Vídeos"
                    description="Aprenda 3 métodos para melhorar sua leitura em inglês e veja vídeos recomendados para treinar sua escuta."
                    linkBtn="/tips"
                    borderColor={cardBorderColorTips}
                >
                    Saiba mais
                </Cards>
            </SectionCards>
        </Container>
    );
}

export default Home;