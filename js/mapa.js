  const dadosRegioes = {
    'Caminho Verde': 'Região coberta por vegetação viva e lar de muitos inimigos venenosos.',
    'Cidade das Lágrimas': 'Centro da civilização de Hallownest, envolta por chuvas eternas.',
    'Hidrovia Real': 'Antigo sistema de transporte subterrâneo e esgoto de Hallownest.'
  };

  const infoBox = document.getElementById('infoBox');
  const regioes = document.querySelectorAll('.regiao');

  regioes.forEach(regiao => {
    regiao.addEventListener('click', () => {
      const nome = regiao.dataset.regiao;
      infoBox.textContent = dadosRegioes[nome] || 'Informação não disponível.';
      infoBox.style.display = 'block';
    });
  });