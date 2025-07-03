  const dadosRegioes = {
    'Caminho Verde': 'Região coberta por vegetação viva e lar de muitos inimigos venenosos.',
    'Cidade das Lágrimas': 'Centro da civilização de Hallownest, envolta por chuvas eternas.',
    'Hidrovia Real': 'Antigo sistema de transporte subterrâneo e esgoto de Hallownest.',
    'Canion':'Uma pequena área cheia de névoa, bolhas, e ácido. Em seu centro está os Arquivos da Professora, lar da Sonhadora Monomon e seus experimentos.',
    'Ermos': 'Cavernas nocivas cheias de esporos. Diferente dos insetos do resto de Hallownest, os habitantes dos Ermos são parecidos com cogumelos fisicamente. Os Ermos contém a Vila dos Louva-a-Deus ao sul, e a entrada principal da Cidade das Lágrimas ao leste.',
    'Ninho': 'Escondido no canto sudoeste de Hallownest, cheio de aranhas de todos os tipos e tamanhos. Ao oeste está o Covil da Besta, uma estrutura enorme cheia de teias contendo a Sonhadora Herrah.',
    'jardins':'Uma exuberante área parecida com uma estufa, cheia de portões ornamentados, espinhos, e plataformas perigosas, localizada na parte oeste de Hallownest. Os Jardins que uma vez foram da Dama Branca, agora tomados de Louva-a-Deus Traidores que foram banidos de sua tribo e procuram sua própria glória.',
    'Dirtmouth':'Um pequeno vilarejo situado sobre a maior parte de Hallownest, encontrado no começo do jogo. É onde o jogador pode, pela primeira vez, entrar em Hallownest propriamente.',
    'pico':'Pico de Cristal é uma enorme montanha brilhante localizada a leste de Dirtmouth.As minas foram escavadas no pico para obter os cristais preciosos da área.',
    'terra':'A Terra do Descanso é uma rede de cavernas repleta de túmulos localizada acima da Cidade das Lágrimas.',
    'Encruzilhada':'Mercadorias e viajantes costumavam passar por essas estradas antigas. Elas caíram a ruína há muito tempo e se tornaram infestadas com insetos agresivos e carcaças de antigos moradores.',
    'Penhascos':'Uma terra desolada na parte noroeste de Hallownest. Esparsamente povoada por inimigos, o chão é cheio de cadáveres de insetos grandes e pequenos. Na parte ocidental, um poderoso vento irá empurrar o jogador para trás, impedindo que ele vá além.',
    'borda':'A parte ao extremo leste de Hallownest, constantemente nevando com cinzas brancas do gigante e falecido Wyrm. Corpos do Coliseu dos Tolos caem para os poços de ácido abaixo. Na parte sudeste da área existe um poço profundo que leva ao maior depósito de Geo do jogo.',
    'colmeia':'Separada das terras do Rei, uma espécie de guerreiros aéreos foram governados por uma rainha que cresceu tanto que ela não podia mais sair de seu domínio.',
    'bacia':'A parte mais profunda de Hallownest, quase desprovida de vida, hospedando apenas necrófagos e formas de vida estranhas. Essa era a localização original do Palácio Branco, lar do Rei Pálido, junto com seus consortes e guardas.'
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