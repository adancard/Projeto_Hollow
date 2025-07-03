const personagensPorTipo = {
    chefes:['Receptáculo Quebrado','Mawlek Incubador','Guardião Cristalizado','Defensor do Esterco','Falso Cavaleiro','Flukemarm','Domador de Deuses','Mãe Mosca','Cavaleiro Vazio','Lordes Louva-a-Deus','Nosk','Mestre das Almas','O Colecionador','A Radiância','Lorde Traidor','Uumuu','Cavaleiros Vigilantes'],
    Guerreiros_dos_Sonhos:['Ancião Hu','Galien','Gorb','Markoth','Marmu','Sem Olhos','Xero'],
    Chefes_dos_Sonhos:['Campeão Fracassado','Parente Perdido','Tirano das Almas'],
    Trupe_Grimm:['Grimm','Rei do Pesadelo'],
    Sonhos_Escondidos:['Príncipe Cinza Zote','Defensor Branco'],
    Sangue_Vital:['Cavaleiro da Colmeia']
  };

const tipoSelect = document.getElementById('tipo');
const personagemSelect = document.getElementById('personagem');
const fichaDiv = document.getElementById('ficha');

// Atualiza os personagens ao escolher o tipo
tipoSelect.addEventListener('change', function () {
    const tipoSelecionado = this.value;

    personagemSelect.innerHTML = '';

    if (!tipoSelecionado || !personagensPorTipo[tipoSelecionado]) {
        personagemSelect.innerHTML = '<option value="">-- Escolha um tipo primeiro --</option>';
        fichaDiv.style.display = 'none';
        fichaDiv.innerHTML = '';
        return;
    }

    personagemSelect.innerHTML = '<option value="">-- Selecione um personagem --</option>';

    personagensPorTipo[tipoSelecionado].forEach(personagem => {
        const option = document.createElement('option');
        // Para o value, padronize sem espaços e com minúsculas
        option.value = personagem.toLowerCase().replace(/\s+/g, '-');
        option.textContent = personagem;
        personagemSelect.appendChild(option);
    });

    // Limpa a ficha ao mudar o tipo
    fichaDiv.style.display = 'none';
    fichaDiv.innerHTML = '';
});

// Evento para mostrar a ficha do personagem escolhido
personagemSelect.addEventListener('change', () => {
    const val = personagemSelect.value;

    console.log(val)

    if (!val || !fichasDados[val]) {
        fichaDiv.style.display = 'none';
        fichaDiv.innerHTML = '';
        return;
    }

    const personagem = fichasDados[val];
    fichaDiv.innerHTML = `
  <h2>${personagem.nome}</h2>
  ${personagem.imagem ? `<img src="${personagem.imagem}" alt="${personagem.nome}" style="max-width:150px; display:block; margin: 10px auto;" />` : ''}
  <p>${personagem.descricao}</p>
  ${personagem.item ? montarTabelaItem(personagem.item) : ''}
`;
    fichaDiv.style.display = 'block';
});


function montarTabelaItem(itens) {
    let html = `<table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%; max-width: 600px; margin-top: 15px;">
    <thead>
      <tr><th>Vida</th></tr>
    </thead>
    <tbody>`;

    for (const chave in itens) {
        const { vida} = itens[chave];
        html += `
      <tr>
        <td>${vida}</td>
      </tr>
    `;
    }

    html += '</tbody></table>';
    return html;
}


