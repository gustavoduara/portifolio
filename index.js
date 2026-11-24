const icone = (id) => `https://skillicons.dev/icons?i=${id}&theme=dark`;

const projetos = [
    {
        titulo: 'SerraDrive (Locadora de Veículos)',
        imagem: './assets/serradrive.jpg',
        destaque: true,
        urlRepositorio: 'https://github.com/gustavoduara/LocadoraVeiculos2026',
        stack: ['C#', '.NET 10', 'Angular 20', 'TypeScript', 'SQL Server', 'Docker'],
        descricao: 'Sistema web multiempresa para gestão de locadoras. A locadora controla frota, planos de cobrança, clientes, cupons, reservas e aluguéis com devolução; o cliente busca carros de todas as locadoras, reserva online e conversa com a locadora em tempo real (SignalR). Autenticação JWT, perfis de acesso, confirmação de e-mail, LGPD, testes automatizados (~89% de cobertura), CI no GitHub Actions e Docker.'
    },
    {
        titulo: 'DuoBingo',
        imagem: './assets/duoBingo.png',
        urlRepositorio: 'https://github.com/gustavoduara/DuobingoFork',
        stack: ['HTML', 'CSS', 'JavaScript'],
        descricao: 'Projeto em grupo na Academia do Programador: sistema completo para automação de testes educacionais. Cadastra disciplinas e matérias, estrutura um banco de questões e gera provas customizadas com facilidade.'
    },
    {
        titulo: 'Controle de Cinema (APMDb)',
        imagem: './assets/ControleCinema.png',
        urlRepositorio: 'https://github.com/gustavoduara/GerenciamentoDeFilme',
        stack: ['HTML', 'CSS', 'C#', '.NET'],
        descricao: 'Aplicação web de catálogo de filmes e séries inspirada no TMDB. Busca títulos, explora lançamentos populares, navega por categorias e mostra avaliações de público em tempo real.'
    }
];

const habilidades = [
    { grupo: 'Back-end', itens: [['cs', 'C#'], ['dotnet', '.NET'], ['java', 'Java'], ['nodejs', 'Node.js']] },
    { grupo: 'Front-end', itens: [['angular', 'Angular'], ['ts', 'TypeScript'], ['html', 'HTML'], ['css', 'CSS'], ['bootstrap', 'Bootstrap'], ['tailwind', 'Tailwind']] },
    { grupo: 'Bancos de dados', itens: [['mysql', 'MySQL'], ['postgres', 'Postgres'], ['sqlite', 'SQLite'], ['mongodb', 'MongoDB']] },
    { grupo: 'Ferramentas', itens: [['docker', 'Docker'], ['git', 'Git'], ['github', 'GitHub'], ['githubactions', 'Actions']] }
];

function renderizarProjetos() {
    const grade = document.getElementById('projectGrid');
    grade.innerHTML = projetos.map(p => `
        <a class="project reveal ${p.destaque ? 'featured' : ''}" href="${p.urlRepositorio}" target="_blank" rel="noopener">
            <div class="p-img">
                <img src="${p.imagem}" alt="Imagem do projeto ${p.titulo}" loading="lazy">
                ${p.destaque ? '<span class="tag-destaque">★ Mais recente</span>' : ''}
            </div>
            <div class="p-body">
                <div class="chips">${p.stack.map(s => `<span class="chip">${s}</span>`).join('')}</div>
                <h3>${p.titulo}</h3>
                <p>${p.descricao}</p>
                <span class="p-link">Ver repositório <span>→</span></span>
            </div>
        </a>`).join('');
}

function renderizarHabilidades() {
    const grade = document.getElementById('skillGrid');
    grade.innerHTML = habilidades.map(g => `
        <div class="skill-group reveal">
            <h3>${g.grupo}</h3>
            <div class="skill-list">
                ${g.itens.map(([id, nome]) => `
                    <div class="skill">
                        <img src="${icone(id)}" alt="${nome}" loading="lazy">
                        <span>${nome}</span>
                    </div>`).join('')}
            </div>
        </div>`).join('');
}

function configurarMenu() {
    const botao = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');

    botao.addEventListener('click', () => {
        const aberto = links.classList.toggle('open');
        botao.setAttribute('aria-expanded', aberto);
    });

    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
        links.classList.remove('open');
        botao.setAttribute('aria-expanded', 'false');
    }));

    const secoes = [...document.querySelectorAll('main section[id]')];
    const observador = new IntersectionObserver(entradas => {
        entradas.forEach(e => {
            if (!e.isIntersecting) return;
            links.querySelectorAll('a').forEach(a =>
                a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
        });
    }, { rootMargin: '-45% 0px -50% 0px' });
    secoes.forEach(s => observador.observe(s));
}

function configurarAnimacoes() {
    const itens = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
        itens.forEach(i => i.classList.add('visible'));
        return;
    }
    const observador = new IntersectionObserver(entradas => {
        entradas.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
                observador.unobserve(e.target);
            }
        });
    }, { threshold: 0.12 });
    itens.forEach(i => observador.observe(i));
}

function main() {
    renderizarProjetos();
    renderizarHabilidades();
    configurarMenu();
    configurarAnimacoes();
    document.getElementById('ano').textContent = new Date().getFullYear();
}

document.addEventListener('DOMContentLoaded', main);
