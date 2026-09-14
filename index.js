const dadosCardDuoBingo = {
    titulo: 'DuoBingo',
    imagem: './assets/duoBingo.png',
    gif: './assets/duobingo.gif',
    urlRepositorio: 'https://github.com/gustavoduara/DuobingoFork',
    stack: [
        'https://skillicons.dev/icons?i=html&theme=light',
        'https://skillicons.dev/icons?i=css&theme=light',
        'https://skillicons.dev/icons?i=js&theme=light',
    ],
    descricao: 'Projeto desenvolvido em grupo na Academia do Programador, o DuoBingo é um sistema completo para automação de testes educacionais. A aplicação permite cadastrar disciplinas e matérias, estruturar um banco de questões e gerar provas customizadas com facilidade.'
};

const dadosCardGestaoEquipamentos = {
    titulo: 'ControleDeCinema',
    imagem: './assets/ControleCinema.png',
    gif: '',
    urlRepositorio: 'https://github.com/gustavoduara/GerenciamentoDeFilme',
    stack: [
        'https://skillicons.dev/icons?i=html&theme=light',
        'https://skillicons.dev/icons?i=css&theme=light',
        'https://skillicons.dev/icons?i=cs&theme=light',
        'https://skillicons.dev/icons?i=net&theme=light',
    ],
    descricao: `O APMDb é uma aplicação web de catálogo de filmes e séries inspirada no TMDB. O projeto permite buscar títulos, explorar lançamentos populares, navegar por categorias de filmes e programas de TV e conferir avaliações de público em tempo real, entregando uma navegação fluida e moderna.`
};

let cardSelecionado;

function carregarDadosCardAtual() {
    if (!cardSelecionado) return;

    const imgCard = document.getElementById('imgCard');
    const stackCard = document.getElementById('stackCard');
    const tituloCard = document.getElementById('tituloCard');
    const descricaoCard = document.getElementById('descricaoCard');
    const urlRepositorio = document.getElementById('urlRepositorio');

    imgCard.src = cardSelecionado.imagem;
    tituloCard.textContent = cardSelecionado.titulo;
    descricaoCard.textContent = cardSelecionado.descricao;
    urlRepositorio.href = cardSelecionado.urlRepositorio;

    stackCard.innerHTML = '';

    for (let item of cardSelecionado.stack) {
        const iconeStack = document.createElement('img');
        iconeStack.width = 35;
        iconeStack.src = item;
        stackCard.appendChild(iconeStack);
    }
}

function selecionarPrimeiroCard() {
    cardSelecionado = dadosCardDuoBingo;
    carregarDadosCardAtual();
}

function selecionarSegundoCard() {
    cardSelecionado = dadosCardGestaoEquipamentos;
    carregarDadosCardAtual();
}

function main() {
    const btnSelecionarPrimeiroCard = document.getElementById("btnSelecionarPrimeiroCard");
    const btnSelecionarSegundoCard = document.getElementById("btnSelecionarSegundoCard");

    if (btnSelecionarPrimeiroCard) {
        btnSelecionarPrimeiroCard.addEventListener('click', selecionarPrimeiroCard);
    }
    if (btnSelecionarSegundoCard) {
        btnSelecionarSegundoCard.addEventListener('click', selecionarSegundoCard);
    }

    selecionarPrimeiroCard();
}

document.addEventListener('DOMContentLoaded', main);