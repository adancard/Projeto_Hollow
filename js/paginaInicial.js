document.addEventListener('DOMContentLoaded', function () {
    const conteudo = document.querySelector(".conteudo");

    // Fade de carregamento inicial
    setTimeout(() => {
        conteudo.classList.add('fadeOut');
    }, 1000);

    setTimeout(() => {
        // Adiciona HTML novo
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

        // Só agora os elementos existem: selecione e aplique os eventos aqui
        const bgFundo = document.getElementById('bg-fundo');
        const botoes = document.querySelectorAll('.opcoes button');

        botoes.forEach(botao => {
            botao.addEventListener('mouseenter', () => {
                let imagem = '';

                if (botao.classList.contains('historia')) {
                    imagem = 'https://images4.alphacoders.com/135/1356810.jpeg';
                } else if (botao.classList.contains('personagens')) {
                    imagem = 'https://i.redd.it/9olwosrsa3b31.png';
                } else if (botao.classList.contains('regioes')) {
                    imagem = 'https://images4.alphacoders.com/118/1184118.jpg';
                } else if (botao.classList.contains('chefes')) {
                    imagem = 'https://i.redd.it/chs0kqyb0r151.png';
                }

                bgFundo.style.backgroundImage = `url('${imagem}')`;
                bgFundo.style.opacity = 1;
            });

            botao.addEventListener('mouseleave', () => {
                bgFundo.style.opacity = 0;
            });
        });

        botoes.forEach(botao => {
            botao.addEventListener('click', () => {

                if (botao.classList.contains('historia')) {
                   window.location.href = 'historia.html';
                } else if (botao.classList.contains('personagens')) {
   
                } else if (botao.classList.contains('regioes')) {
                   
                } else if (botao.classList.contains('chefes')) {

                }
            });
        });



    }, 2000); // fim do segundo setTimeout
});
