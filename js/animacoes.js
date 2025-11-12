// Esse código procura por todos os elementos que têm a classe 'animar-scroll'
const elementosAnimados = document.querySelectorAll('.animar-scroll');

// Função que verifica quais elementos estão visíveis na tela
const verificarVisibilidade = () => {
    const alturaJanela = window.innerHeight * 0.8; // 80% da altura da tela

    elementosAnimados.forEach((elemento) => {
        const topoElemento = elemento.getBoundingClientRect().top;

        // Se o topo do elemento estiver dentro dos 80% da tela
        if (topoElemento < alturaJanela) {
            elemento.classList.add('visivel');
        } else {
            // Opcional: remover a classe se sair da tela (para animar de novo)
            //elemento.classList.remove('visivel');
        }
    });
};

// Roda a função uma vez quando a página carrega
verificarVisibilidade();

// Roda a função toda vez que o usuário rolar a página
window.addEventListener('scroll', verificarVisibilidade);