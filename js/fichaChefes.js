const fichasDados = {
    'receptáculo-quebrado': {
        nome: 'Receptáculo Quebrado',
        imagem: 'https://adancard.github.io/Projetos_pessoais/imgEx/Receptaculo.webp',
        descricao: 'O Receptáculo Quebrado é um dos vários receptáculos criados pelo Rei Pálido para conter a infecção, e que foram descartados no Abismo. Apesar disso, ele conseguiu fugir do abismo. Porém, diferente de nosso jogador, ele não teve muito sucesso e acabou morrendo na Bacia Antiga em algum momento da sua jornada. Sua carcaça foi abandonada em uma caverna e a infecção tomou conta de seu corpo morto.',
        item: { vida: { vida: 525 } }
    },
    'mawlek-incubador': {
        nome: 'Mawlek Incubador',
        imagem: 'https://adancard.github.io/Projetos_pessoais/imgEx/Mawlek_o_Incubador.webp',
        descricao: 'Um solitário Mawlek Incubador pode ser encontrado fora do caminho na Encruzilhada Esquecida, longe do seu irmão vivo na Bacia Antiga. Ele fica em meio a restos fossilizados de seus parentes, pedindo que reproduzam. Essa besta selvagem foi conduzida tanto pela solidão quanto pela Infecção que começou cobrindo seu corpo com bulbos. Ele ataca O Cavaleiro logo quando ele entra a sala, pulando no chão. Após derrotá-lo, a Infecção explode Mawlek.',
        item: { vida: { vida: 300 } }
    },
    'guardião-cristalizado': {
        nome: 'Guardião Cristalizado',
        imagem: 'https://adancard.github.io/Projetos_pessoais/imgEx/B_Crystal_Guardian.webp',
        descricao: 'O Guardião Cristalizado faz parte dos mineradores do Pico de Cristal que morreram pela Infecção e foram reanimados por ela.Ele parece maior do que as outras carcaças, tem cristais crescendo em suas costas e envolvendo seus braços e sua cabeça. Ele também tem mais domínio sobre a luz do cristal do que as Carcaças Cristalizadas.',
        item: { vida: { vida: 280 } }
    },
    'defensor-do-esterco': {
        nome: 'Defensor do Esterco',
        imagem: 'https://adancard.github.io/Projetos_pessoais/imgEx/B_Dung_Defender.webp',
        descricao: 'O Defensor do Esterco costumava ser conhecido como Ogrim, o mais leal dos Cinco Grandes Cavaleiros de Hallownest.Como tal, ele participou de muitas batalhas e aventuras.Ele também era igualmente famoso por seu mau cheiro, embora isso não o impedisse de desfrutar da companhia da Dama Branca e seus companheiros cavaleiros.Ele gostava particularmente da cavaleira Isma.',
        item: { vida: { vida: '700 / 750 / 800 / 850 / 900 (Ferrão nível 0/1/2/3/4)' } }
    },
    'falso-cavaleiro': {
        nome: 'Falso Cavaleiro',
        imagem: 'https://adancard.github.io/Projetos_pessoais/imgEx/B_False_Knight.webp',
        descricao: 'Falso Cavaleiro é um Verme vestindo a armadura de Hegemol, um dos Cinco Cavaleiros Reais de Hallownest. Esta criatura fraca queria encontrar meios de proteger seus irmãos que vivem em um depósito abandonado no meio da Encruzilhada Esquecida. Quando ele descobriu Hegemol dormindo em sua concha blindada, ele a pegou para si, esperando pela grande força que usar a armadura parecia prometer. Mesmo que a loucura não o tenha levado a fazer isso, o Falso Cavaleiro acabou caindo nas mãos da Infecção.',
        item: { vida: { vida: '65 (Armadura) 40 (Verme)/ Necessário para matar: 3 fases da armadura (65x3) + 4 fases do Verme (40x4) = 355' } }
    },
    'flukemarm': {
        nome: 'Flukemarm',
        imagem: 'https://adancard.github.io/Projetos_pessoais/imgEx/B_Flukemarm.webp',
        descricao: 'Flukemarm é a mãe de todos os Flukes que infestam a Hidrovia Real.Seu corpo é usado como um ninho para Flukefeys jovens.Assim como seus filhos, ela foi Infectada e hostilizada, embora sua condição de reprodutora a impeça de sair de sua caverna.',
        item: { vida: { vida: 350 } }
    },
    'domador-de-deuses': {
        nome: 'Domador de Deuses',
        imagem: 'https://adancard.github.io/Projetos_pessoais/imgEx/God_Tamer_Icon.webp',
        descricao: 'A Domadora de Deuses é uma guerreira veterana do Coliseu dos Tolos, tomando o lugar de chefe do último e mais brutal julgamento. Ela compensa por sua pequena estatura com a força de sua Besta domesticada, ao lado da qual ela luta. Ambos apresentam sinais da Infecção.',
        item: { vida: { vida: 'tamer:600 Besta:450 total:1050' } }
    },
    'mãe-mosca': {
        nome: 'Mãe Mosca',
        imagem: 'https://adancard.github.io/Projetos_pessoais/imgEx/Gruz_Mother_Awake.webp',
        descricao: 'Mãe Mosca é um mini-chefe opcional em Hollow Knight. Ela também é uma chefe dupla do Coliseu dos Tolos. Desbloquear sua entrada no Diário requer derrotar 3 Mães Mosca.',
        item: { vida: { vida: 90 } }
    },
    'cavaleiro-vazio': {
        nome: 'Cavaleiro Vazio',
        imagem: 'https://adancard.github.io/Projetos_pessoais/imgEx/Hollow_Knight.webp',
        descricao: 'O Cavaleiro Vazio é um Receptáculo escolhido pelo Rei Pálido para selar a Radiância e salvar Hallownest da Infecção.Como seus irmãos, ele era um filho do Rei e da Rainha de Hallownest, nascido no Abismo e preenchido com o poder do Vazio. Sendo assim, nenhum deles tem gênero.A condição desse nascimento consequentemente os deixaria sem mente, vontade ou voz, para prevenir que A Radiância não os influenciasse.No entanto, sua pureza foi mal avaliada, manchada por uma ideia instintiva, o laço com o Rei Pálido, aquele que os criou.',
        item: { vida: { vida: 'Fase 1-3 respectivamente: 250/350/400 Total: 1000 +250 (Cura na quarta fase) Final total: 1250' } }
    },
    'lordes-louva-a-deus': {
        nome: 'Lordes Louva-a-Deus',
        imagem: 'https://adancard.github.io/Projetos_pessoais/imgEx/B_Mantis_Lords-2.webp',
        descricao: 'As Lordes Louva-a-Deus são três irmãs que comandam a Tribo-Louva-a-Deus nas profundezas dos Ermos Fúngicos.Eles conseguiram resistir à Infecção durante a queda de Hallownest,exceto o irmão e seus seguidores, que escolheram aceitar a Infecção voluntariamente.',
        item: { vida: { vida: 'Primeira fase: 210 Segunda fase: 160 + 160 = 320 Total: 530' } }
    },
    'nosk': {
        nome: 'Nosk',
        imagem: 'https://adancard.github.io/Projetos_pessoais/imgEx/B_Nosk.webp',
        descricao: 'Nosk é uma besta Infectada misteriosa e metamórfica caçando no Ninho Profundo.Ele pode imitar a forma de rostos que encontra nas memórias de insetos, geralmente entes queridos ou falecidos, e pode contorcer seu corpo para assumir uma moldura menor.Ele pendura suas presas, incluindo Escavadores, um Devoto Espreitador, e vários Receptáculos, no teto do seu covil no fundo do Ninho Profundo.',
        item: { vida: { vida: 680 } }
    },
    'mestre-das-almas': {
        nome: 'Mestre das Almas',
        imagem: 'https://adancard.github.io/Projetos_pessoais/imgEx/B_Soul_Master.webp',
        descricao: 'O Mestre das Almas é o líder do Santuário das Almas de Hallownest, que procurou maneiras de expandir as mentes dos insetos e atingir o foco puro. Quando a Infecção começou, ele chegou à conclusão de que ALMA, a energia que anima insetos e bestas, era a solução para curar as suas mentes dessa praga.Ele se recusou a ouvir o Rei Pálido se opondo ao seu trabalho, e não pôde perceber que a sua própria mente Infectada estava o influenciando.',
        item: { vida: { vida: '275 (Primeira Fase) 110 (Segunda Fase) Total: 385' } }
    },
    'o-colecionador': {
        nome: 'O Colecionador',
        imagem: 'https://adancard.github.io/Projetos_pessoais/imgEx/B_Collector.webp',
        descricao: 'O Colecionador é uma criatura feita de Vazio. Ele vive escondido na Torre do Amor trancado junto com uma grande coleção de insetos de toda Hallownest que são preservados, vivos ou mortos, em jarras de vidro.',
        item: { vida: { vida: '750/750/750/800/850 (Ferrão: 0/1/2/3/4)' } }
    },
    'a-radiância': {
        nome: 'A Radiância',
        imagem: 'https://adancard.github.io/Projetos_pessoais/imgEx/B_Radiance.webp',
        descricao: 'A Radiância é um ser superiorde luz semelhante à Essência e, como tal, oposto ao Vazio, seu antigo inimigo.A Tribo das Mariposas nasceu de sua luz e em troca a reverenciou..',
        item: { vida: { vida: 'Fases 1/2/3/4 respectivamente: 350/400/250/700 Total: 1700' } }
    },
    'lorde-traidor': {
        nome: 'Lorde Traidor',
        imagem: 'https://adancard.github.io/Projetos_pessoais/imgEx/B_Traitor_Lord.webp',
        descricao: 'O Lorde Traidor foi um dos líderes da Tribo Louva-a-Deus, junto de suas irmãs, além de ser particularmente ressentido a respeito de Hallownest.De forma semelhante, ele desaprovava o relacionamento de sua filha com a Pranteadora Cinzenta, por ela ser um ser de fora.',
        item: { vida: { vida: 800 } }
    },
    'uumuu': {
        nome: 'Uumuu',
        imagem: 'https://adancard.github.io/Projetos_pessoais/imgEx/B_Uumuu.webp',
        descricao: 'Uumuu surge subitamente da piscina de ácido na sala que precede a câmara interna assim que o Cavaleiro chegar nela. Durante a luta, Quirrel intervém para atacar Uumuu com o seu ferrão e quebrar a sua defesa gelatinosa, expondo seu núcleo. Uma vez derrotado, a Infecção irrompe para fora de Uumuu antes de explodir.',
        item: { vida: { vida: 300 } }
    },
    'cavaleiros-vigilantes': {
        nome: 'Cavaleiros Vigilantes',
        imagem: 'https://adancard.github.io/Projetos_pessoais/imgEx/Watcher_Knight_Icon.webp',
        descricao: 'Os Cavaleiros Vigilantes costumavam defender a entrada do Pináculo do Observador e o corpo adormecido de Lurien.Eles acabaram morrendo enquanto montavam guarda, deixando suas conchas para trás.',
        item: { vida: { vida: '6 x 220/220/220/240/260 Total: 1320/1320/1320/1440/1560 (Ferrão 0/1/2/3/4)' } }
    },

    'gorb': {
        nome: 'Gorb',
        imagem: 'https://adancard.github.io/Projetos_pessoais/imgEx/HJ_Gorb.webp',
        descricao: 'orb, a Grande Mente, era uma criatura mística com um cérebro distendido que afirmava ser onisciente.Eles incitaram os outros a reverenciar sua mente e ascender com eles a um plano diferente de existência.Seus restos mortais foram enterrados em uma colina no topo de Howling Cliffs , com uma lápide esculpida em sua imagem.',
        item: { vida: { vida: '200/320/416/500/570 ( Atualizações de Ferrão 0/1/2/3/4)' } }
    },
    'xero': {
        nome: 'Xero',
        imagem: 'https://adancard.github.io/Projetos_pessoais/imgEx/HJ_Xero.webp',
        descricao: 'Xero era um guerreiro de Hallownest que acreditava que a força sempre lhe permitiria um futuro brilhante.Quando sua mente foi infectada , ele esperava lutar contra a praga com violência Alimentado pela mesma esperança, ele se voltou contra o Rei Pálido , pelo qual foi executado.Xero foi enterrado nos Campos de Descanso , sua tumba um lembrete para qualquer um que traísse o Rei.Quando seu espírito acordou, ele ainda não conseguia ver o erro de suas ações e, em vez disso, acreditava que sua morte era o resultado de um destino condenado.',
        item: { vida: { vida: '200/320/416/500/570 (Atualizações de Ferrão 0/1/2/3/4)' } }
    },
    'marmu': {
        nome: 'Marmu',
        imagem: 'https://adancard.github.io/Projetos_pessoais/imgEx/B_Marmu.webp',
        descricao: 'Marmu foi uma protetora inocente, porém forte, dos Jardins da Rainha.A Rainha prometeu ensiná-la a como voar quando retornasse ao seu retiro verdejante.Marmu faleceu antes desse dia, e um totem em sua memória foi erguido em seu túmulo nos confins do jardim.',
        item: { vida: { vida: '200/320/416/500/570 (Ferrão nível 0/1/2/3/4)' } }
    },
    'sem-olhos': {
        nome: 'Sem Olhos',
        imagem: 'https://adancard.github.io/Projetos_pessoais/imgEx/HJ_No_Eyes.webp',
        descricao: 'Sem olhos era um guerreiro de Hallownest que caiu para a infecção . Ela não conseguia dormir sabendo que os sonhos iriam infectar sua mente com a luz.Para proteger a si mesma e a outros insetos, ela arrancou os olhos deles e os dela antes de sucumbir.Ela foi colocada para descansar no Santuário de Pedra , um lugar em completa escuridão, e uma estátua esculpida foi colocada sobre seu túmulo.',
        item: { vida: { vida: '200/320/416/500/570 (Atualizações de Ferrão 0/1/2/3/4)' } }
    },
    'galien': {
        nome: 'Galien',
        imagem: 'https://adancard.github.io/Projetos_pessoais/imgEx/HJ_Galien.webp',
        descricao: 'Galien era um guerreiro corajoso e invicto que dizia ser o mais forte em Hallownest e desejava provar seu valor ao Rei Pálido como um Cavaleiro. Ele viajou para Ninho Profundo para testar sua força, mas acabou encontrando a morte. Sua casca está em uma caverna cheia de cogumelos brilhantes incomumente grandes abaixo da Linha de Bonde Inacabada em Ninho Profundo.',
        item: { vida: { vida: '230/368/479/570/640 ( Atualizações de Ferrão 0/1/2/3/4)' } }
    },
    'ancião-hu': {
        nome: 'Ancião Hu',
        imagem: 'https://adancard.github.io/Projetos_pessoais/imgEx/HJ_Elder_Hu.webp',
        descricao: 'Ancião Hu era um sábio viajante que procurou purificar as fronteiras de Hallownest da Infecção.Ele alcançou a Vila Louva-a-Deus, mas sua própria mente Infectada o fez ver os Lordes Louva-a-Deus e a Tribo como afligidos pela praga.Os Louva-a-Deus o mataram depois que ele os atacou.Um memorial foi erguido em seu nome acima dos portões da Cidade das Lágrimas, com sua túnica e colar de contas repousando sobre o memorial.',
        item: { vida: { vida: '250/420/550/600/650 (Melhorias no Ferrão 0/1/2/3/4)' } }
    },
    'markoth': {
        nome: 'Markoth',
        imagem: 'https://adancard.github.io/Projetos_pessoais/imgEx/HJ_Markoth.webp',
        descricao: 'Markoth foi a única mariposa a carregar uma arma além de Thistlewind .Ele foi para Borda do Reinopara se isolar e meditar,na esperança de descobrir uma verdade há muito esquecida.Markoth lutou contra qualquer um que o ameaçasse, independentemente de suas razões.Ele finalmente morreu, seus restos mortais nunca foram encontrados, em uma caverna solitária na Borda do Reino.',
        item: { vida: { vida: '250/400/520/624/705 ( Atualizações de Ferrão 0/1/2/3/4)' } }
    },

    'campeão-fracassado': {
        nome: 'Campeão Fracassado',
        imagem: 'https://adancard.github.io/Projetos_pessoais/imgEx/Failed_Champion.webp',
        descricao: 'Campeão Fracassado é um chefe escondido em Hollow Knight. Ele é a variante dos Sonhos do Falso Cavaleiro, sendo mais forte e ágil do que o seu equivalente físico.',
        item: { vida: { vida: '360 (Armadura) 40 (Verme), 60 no primeiro atordoamento/ Total mínimo para matar: 3 fases de armadura (360x3) + 4 fases da cabeça (60 e 40x3) = 1260' } }
    },
    'parente-perdido': {
        nome: 'Parente Perdido',
        imagem: 'https://adancard.github.io/Projetos_pessoais/imgEx/Lost-Kin.webp',
        descricao: 'Parente Perdido é um chefe oculto em Hollow Knight . É a variante Sonhador do Receptaculo Quebrado , mais rápido e resistente do que sua contraparte física.',
        item: { vida: { vida: 1200 } }
    },
    'tirano-das-almas': {
        nome: 'Tirano das Almas',
        imagem: 'https://adancard.github.io/Projetos_pessoais/imgEx/Soul_Tyrant.webp',
        descricao: 'O Tirano das Almas é um chefe oculto em Hollow Knight. É a variante dos sonhos do Mestre das Almas, mais rápido e mais resistente do que sua contraparte física.',
        item: { vida: { vida: '900 (Primeira Fase) 350 (Segunda Fase) Total: 1250' } }
    },

    'grimm': {
        nome: 'Grimm',
        imagem: 'https://adancard.github.io/Projetos_pessoais/img/Grimm_Circle.webp',
        descricao: 'Grimm é o mestre de a Trupe Grimm, um misterioso circo itinerante. Na verdade, Grimm e sua Trupe viajam do Reino Pesadelo para onde quer que a Lanterna do Pesadelo tenha sido iluminada por acólitos.Eles reúnem Nightmare Flames de terras em ruínas para alimentar o ser sinistro que escraviza a Trupe o Coração do Pesadelo.',
        item: { vida: { vida: 1000 } }
    },
    'rei-do-pesadelo': {
        nome: 'Rei do Pesadelo',
        imagem: 'https://adancard.github.io/Projetos_pessoais/imgEx/B_Nightmare_King.webp',
        descricao: 'Rei do Pesadelo Grimm é o chefe final opcional de The Grimm Troupe em Hollow Knight . Ele é a forma dos sonhos do Trupe Master Grimm . Desbloquear sua entrada no Diário requer derrotá-lo em Dirtmouth . Embora ele possa ser combatido no conteúdo Godmaster Panteão de Hallownest e no conteúdo Godmaster Salão dos Deuses , derrotá-lo lá não desbloqueia sua entrada no Diário. Isso significa que sua entrada nunca poderá ser obtida após o banimento .',
        item: { vida: { vida: 1500 } }
    },

    'príncipe-cinza-zote': {
        nome: 'Príncipe Cinza Zote',
        imagem: 'https://adancard.github.io/Projetos_pessoais/imgEx/B_Grey_Prince_Zote.webp',
        descricao: 'Gray Prince Zote é um chefe oculto em Hollow Knight . Ele é a variante Dream mais forte de Zote the Mighty , alimentada pelas ilusões de Bretta sobre ele.',
        item: { vida: { vida: '1200-1500 (+100 por luta nas primeiras 4 lutas)' } }
    },
    'defensor-branco': {
        nome: 'Defensor Branco',
        imagem: 'https://adancard.github.io/Projetos_pessoais/imgEx/B_White_Defender.webp',
        descricao: 'O Defensor Branco é um chefe oculto em Hollow Knight introduzido na atualização Hidden Dreams . Ele é a forma Dream do Dung Defender , no auge de sua glória passada.',
        item: { vida: { vida: 1600 } }
    },

    'cavaleiro-da-colmeia': {
        nome: 'Cavaleiro da Colmeia',
        imagem: 'https://adancard.github.io/Projetos_pessoais/imgEx/Cavaleiro_da_Colmeia.webp',
        descricao: 'Cavaleiro da Colmeia é o cavaleiro mais valente e habilidoso da Colmeia.Ele não voa e é obrigado a proteger a Rainha da Colmeia Vespa pela mente coletiva das Abelhas.Embora a Infecção tenha se espalhado para a Colmeia depois que a rainha morreu,o Cavaleiro da Colmeia ainda a protege, esperando que ela um dia acorde e reviva a Colmeia.',
        item: { vida: { vida: '800 / 800 / 800 / 850 / 920 (Ferrão nível 0/1/2/3/4)' } }
    }




};
