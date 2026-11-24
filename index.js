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

const dadosCardSerraDrive = {
    titulo: 'SerraDrive (Locadora de Veículos)',
    imagem: './assets/serradrive.jpg',
    gif: '',
    urlRepositorio: 'https://github.com/gustavoduara/LocadoraVeiculos2026',
    stack: [
        'https://skillicons.dev/icons?i=cs&theme=light',
        'https://skillicons.dev/icons?i=dotnet&theme=light',
        'https://skillicons.dev/icons?i=angular&theme=light',
        'https://skillicons.dev/icons?i=ts&theme=light',
        'https://skillicons.dev/icons?i=tailwind&theme=light',
        'https://skillicons.dev/icons?i=docker&theme=light',
    ],
    descricao: 'Sistema web multiempresa para gestão de locadoras de veículos, feito com ASP.NET Core (.NET 10) e Angular 20. A locadora gerencia frota, planos de cobrança, clientes, condutores, cupons, reservas e aluguéis com devolução; o cliente busca carros de todas as locadoras por período, reserva online e conversa com a locadora em tempo real (SignalR). Conta com autenticação JWT, perfis de acesso, confirmação de e-mail, LGPD, testes automatizados (cobertura de ~89%), CI no GitHub Actions e Docker.'
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

function selecionarTerceiroCard() {
    cardSelecionado = dadosCardSerraDrive;
    carregarDadosCardAtual();
}

function main() {
    const btnSelecionarPrimeiroCard = document.getElementById("btnSelecionarPrimeiroCard");
    const btnSelecionarSegundoCard = document.getElementById("btnSelecionarSegundoCard");

    const btnSelecionarTerceiroCard = document.getElementById("btnSelecionarTerceiroCard");

    if (btnSelecionarPrimeiroCard) {
        btnSelecionarPrimeiroCard.addEventListener('click', selecionarPrimeiroCard);
    }
    if (btnSelecionarSegundoCard) {
        btnSelecionarSegundoCard.addEventListener('click', selecionarSegundoCard);
    }

    if (btnSelecionarTerceiroCard) {
        btnSelecionarTerceiroCard.addEventListener('click', selecionarTerceiroCard);
    }

    selecionarTerceiroCard();
}

document.addEventListener('DOMContentLoaded', main);