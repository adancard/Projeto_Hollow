document.addEventListener('DOMContentLoaded', function () {
    const conteudo = document.querySelector(".conteudo");

    // Detecta se é mobile
    const isMobile = window.innerWidth <= 768;

    // Define imagens diferentes para desktop e mobile
    const imagensParaPrecarregar = isMobile ? [
        'https://i.pinimg.com/736x/23/3b/85/233b858c719f0cd03d8c76007de7bf8d.jpg',
        'https://i.redd.it/chs0kqyb0r151.png',
        'https://i.pinimg.com/736x/90/8e/2f/908e2fbb1fa2493085e41108b082668e.jpg',
        'https://i.pinimg.com/736x/4e/5f/c2/4e5fc2a30dbca0813f5cbc4004780deb.jpg'
    ] : [
        'https://images4.alphacoders.com/135/1356810.jpeg',
        'https://i.redd.it/9olwosrsa3b31.png',
        'https://images4.alphacoders.com/118/1184118.jpg',
        'https://i.redd.it/chs0kqyb0r151.png'
    ];

    imagensParaPrecarregar.forEach(src => {
        const img = new Image();
        img.src = src;
    });

    setTimeout(() => {
        conteudo.classList.add('fadeOut');
    }, 1000);

    setTimeout(() => {
        conteudo.innerHTML = `    
        <div id="bg-fundo"></div>
        <div class="container">
            <div class="opcoes">
                <button class="historia">Historia</button>
                <button class="personagens">Personagens</button>
                <button class="regioes">Regioes</button>
                <button class="chefes">Chefes</button>
            </div>
        </div>`;
        conteudo.classList.remove('fadeOut');
        conteudo.classList.add('fadeIn');

        const bgFundo = document.getElementById('bg-fundo');
        const botoes = document.querySelectorAll('.opcoes button');

        botoes.forEach((botao, index) => {
            botao.addEventListener('mouseenter', () => {
                bgFundo.style.backgroundImage = `url('${imagensParaPrecarregar[index]}')`;
                bgFundo.style.opacity = 1;
            });

            botao.addEventListener('mouseleave', () => {
                bgFundo.style.opacity = 0;
            });

            botao.addEventListener('click', () => {
                const rotas = ['historia.html', 'personagens.html', 'mapa.html', 'chefes.html'];
                window.location.href = rotas[index];
            });
        });

    }, 2000);
});
