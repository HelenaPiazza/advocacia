// Esse código procura por todos os elementos que têm a classe 'animar-scroll'
const elementosAnimados = document.querySelectorAll('.animar-scroll');

// Função que verifica quais elementos estão visíveis na tela
const verificarVisibilidade = () => {
    //varifica se a altura da tela é igual a 80%
    const alturaJanela = window.innerHeight * 0.8; 

    // Inicia um loop que verifica individualmente cada item que deve ser animado.
    elementosAnimados.forEach((elemento) => {
        // Calcula a distância  do topo do elemento até o topo da tela.
        const topoElemento = elemento.getBoundingClientRect().top;

        // Se o topo do elemento estiver dentro dos 80% da tela
        if (topoElemento < alturaJanela) {
            //adiciona a classe visivel ao elemento
            elemento.classList.add('visivel');
        } else {
            // Remover a classe se sair da tela (para animar de novo)
            //elemento.classList.remove('visivel');
        }
    });
};

// Roda a função uma vez quando a página carrega
verificarVisibilidade();

// Roda a função toda vez que o usuário rolar a página
window.addEventListener('scroll', verificarVisibilidade);