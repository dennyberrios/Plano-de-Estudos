import ButtonLink from "../../components/ButtonLink";
import { Container } from "../../components/Container";
import { SectionTips } from "./styles";

const Tips = () => {
    return (
        <Container>
            <SectionTips>
                <h2>Objetivo</h2>
                <p>Aprender a organizar melhor sua prática de leitura em inglês, aumentar seu vocabulário e melhorar a compreensão de textos. Aqui estão dicas e três métodos que podem te ajudar a ler mais fluentemente e com menos frustrações.</p>

                <h2>Estudo do Vocabulário</h2>
                <div className="activity">
                    <p>Antes de começar a leitura, é importante ter uma base de palavras mais comuns no inglês. Procure aprender pelo menos 250 palavras usadas com frequência. Foque em nomes pessoais, adjetivos básicos e numerais, de forma que você consiga ler pelo menos um livro simples com essas palavras.</p>
                </div>

                <h2>Dicas para Leitura Eficaz</h2>
                <div className="activity">
                    <p>Separe um momento específico para ler com o objetivo de ganhar vocabulário e outro momento para focar apenas em entender o texto. Evitar a constante busca por novas palavras durante a leitura ajuda a reduzir a desmotivação e melhora a fluidez da prática.</p>
                </div>

                <h2>3 Métodos de Leitura</h2>

                <h3>1. Contexto</h3>
                <p>Neste método, você não para para pesquisar palavras novas. Você continua lendo e atribui significados às palavras desconhecidas com base no contexto do que já foi compreendido. Leia o mesmo texto várias vezes para que a compreensão do contexto fique mais clara e fluida.</p>

                <h3>2. Só Palavras Importantes</h3>
                <p>Durante a leitura, você pesquisa apenas as palavras que estão impedindo sua compreensão do texto. Palavras menos importantes podem ser ignoradas. Identifique as palavras chave que afetam o entendimento da mensagem principal.</p>

                <h3>3. Destaque Palavras</h3>
                <p>Este método é ideal para quem quer aprender mais vocabulário. Durante a leitura, destaque as palavras que você não entende e que não são essenciais para a compreensão do texto. Após terminar a leitura, volte e pesquise o significado dessas palavras para expandir seu vocabulário.</p>

                <h2>Sugestão de Vídeo</h2>
                <div className="activity">
                    <p>Assista ao vídeo da professora Tiffani no YouTube para melhorar sua prática auditiva e de leitura. Recomendo assistir sem legendas, e depois assistir novamente com legendas. Utilize os três métodos acima durante a leitura das legendas.</p>
                    <p><a href="https://www.youtube.com/watch?v=ag3RnEaB3zM&list=WL&index=4&t=55s" target="_blank">Veja o vídeo aqui</a></p>
                </div>

                <ButtonLink link={'/'}>Voltar ao Plano de Estudos</ButtonLink>
            </SectionTips>
        </Container>
    );
}

export default Tips;