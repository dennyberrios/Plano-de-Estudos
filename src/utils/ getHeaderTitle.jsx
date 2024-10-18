export const getHeaderTitle = (pathname) => {
    switch (pathname) {
        case '/':
            return (
                <>
                    <h1>Bem-vindo ao Seu Plano de Estudos</h1>
                    <p>Transforme sua jornada de aprendizado em inglês com atividades práticas e envolventes!</p>
                </>
            );
        case '/monday':
            return (
                <>
                    <h1>Segunda-feira: Leitura e Tradução</h1>
                </>
            )
        case '/tuesday':
            return (
                <>
                    <h1>Terça-feira: Escuta com Músicas</h1>
                </>
            )
        case '/wednesday':
            return (
                <>
                    <h1>Quarta-feira: Gramática e Escrita</h1>
                </>
            )
        case '/thursday':
            return (
                <>
                    <h1>Quinta-feira: Conversação e Pronúncia</h1>
                </>
            )
        case '/friday':
            return (
                <>
                    <h1>Sexta-feira: Revisão Geral</h1>
                </>
            )
        case '/saturday':
            return (
                <>
                    <h1>Sábado: Diversão em Inglês</h1>
                </>
            )
        case '/sunday':
            return (
                <>
                    <h1>Domingo: Dia Livre</h1>
                </>
            )
        case '/tips':
            return (
                <>
                    <h1>Dicas de Leitura e Métodos</h1>
                </>
            )
        default:
            return (
                <>
                    <h1>Page Not Found</h1>
                </>
            );
    }
};