const tabelaDePrecos = {
  varejo: [
    {
      tamanho: '00',
      preco: 15.9,
    },
    {
      tamanho: '0',
      preco: 20.9,
    },
    {
      tamanho: '1',
      preco: 23.9,
    },
    {
      tamanho: '02',
      preco: 25.9,
    },
    {
      tamanho: '03',
      preco: 28.9,
    },
    {
      tamanho: '04',
      preco: 30.9,
    },
    {
      tamanho: '05',
      preco: 33.9,
    },
    {
      tamanho: '06',
      preco: 35.9,
    },
    {
      tamanho: '07',
      preco: 38.9,
    },
    {
      tamanho: '08',
      preco: 40.9,
    },
    {
      tamanho: '09',
      preco: 43.9,
    },
    {
      tamanho: '10',
      preco: 45.9,
    },
    {
      tamanho: '11',
      preco: 48.9,
    },
    {
      tamanho: '12',
      preco: 50.9,
    },
    {
      tamanho: '13',
      preco: 53.9,
    },
    {
      tamanho: '14',
      preco: 55.9,
    },
    {
      tamanho: '15',
      preco: 58.9,
    },
    {
      tamanho: '16',
      preco: 60.9,
    },
  ],
  atacado8pç: [
    {
      tamanho: '00',
      preco: 11.9,
    },
    {
      tamanho: '0',
      preco: 14.9,
    },
    {
      tamanho: '1',
      preco: 16.9,
    },
    {
      tamanho: '02',
      preco: 17.9,
    },
    {
      tamanho: '03',
      preco: 19.9,
    },
    {
      tamanho: '04',
      preco: 20.9,
    },
    {
      tamanho: '05',
      preco: 22.9,
    },
    {
      tamanho: '06',
      preco: 23.9,
    },
    {
      tamanho: '07',
      preco: 25.9,
    },
    {
      tamanho: '08',
      preco: 26.9,
    },
    {
      tamanho: '09',
      preco: 28.9,
    },
    {
      tamanho: '10',
      preco: 29.9,
    },
    {
      tamanho: '11',
      preco: 31.9,
    },
    {
      tamanho: '12',
      preco: 32.9,
    },
    {
      tamanho: '13',
      preco: 34.9,
    },
    {
      tamanho: '14',
      preco: 35.9,
    },
    {
      tamanho: '15',
      preco: 37.9,
    },
    {
      tamanho: '16',
      preco: 38.9,
    },
  ],
  atacado30pç: [
    {
      tamanho: '00',
      preco: 11.9,
    },
    {
      tamanho: '0',
      preco: 11.9,
    },
    {
      tamanho: '1',
      preco: 11.9,
    },
    {
      tamanho: '02',
      preco: 17.9,
    },
    {
      tamanho: '03',
      preco: 17.9,
    },
    {
      tamanho: '04',
      preco: 17.9,
    },
    {
      tamanho: '05',
      preco: 17.9,
    },
    {
      tamanho: '06',
      preco: 17.9,
    },
    {
      tamanho: '07',
      preco: 25.9,
    },
    {
      tamanho: '08',
      preco: 25.9,
    },
    {
      tamanho: '09',
      preco: 25.9,
    },
    {
      tamanho: '10',
      preco: 25.9,
    },
    {
      tamanho: '11',
      preco: 25.9,
    },
    {
      tamanho: '12',
      preco: 32.9,
    },
    {
      tamanho: '13',
      preco: 32.9,
    },
    {
      tamanho: '14',
      preco: 32.9,
    },
    {
      tamanho: '15',
      preco: 32.9,
    },
    {
      tamanho: '16',
      preco: 32.9,
    },
  ],
};
const btnDog = document.querySelector('.dog');
const btnCat = document.querySelector('.cat');
const btnCalculate = document.getElementById('btn-calculate');
let totalMesMO = 0;

let totalDasPecas = 0;

const multiplicadorDaQuantidadePeloPreco = (opcaoDePreco) => {
  const linhasDeCalculo = document.querySelectorAll('.linhas-de-calculo');

  linhasDeCalculo.forEach((elemento) => {
    // const qtd = elemento.querySelector('input').value;
    // const qtdNumber = parseFloat(qtd);

    // const select = elemento.querySelector('select').value;
    // const selectNumber = select;

    // const selectObj = tabelaDePrecos[opcaoDePreco].find(
    //   (elemento) => elemento.tamanho === selectNumber
    // );

    // const selectResult = selectObj.preco;

    // const total = qtdNumber * selectResult;
    // totalMesMO += total;
    const resultDasPecas = elemento
      .querySelector('.divDoPrecoTot')
      .querySelector('.valor').innerHTML;

    totalMesMO += parseFloat(resultDasPecas);
  });
};

const dogBtn = () => {
  const select = document.createElement('select');
  const inputQtd = document.createElement('input');
  inputQtd.type = 'number';
  inputQtd.min = '1';
  inputQtd.value = '1';
  const div = document.createElement('div');
  const valoresDoSelect = tabelaDePrecos.varejo.map(
    (tamanho) => tamanho.tamanho
  );
  const qtd = document.createElement('p');
  qtd.innerHTML = 'Qtd:';
  const tamanho = document.createElement('p');
  tamanho.innerHTML = 'Tamanho:';
  const cifraoUnitario = document.createElement('p');
  const cifraoUniVezQtd = document.createElement('p');
  const cifrao = document.createElement('p');
  const cifrao2 = document.createElement('p');

  const divPrecoUn = document.createElement('div');
  const divPrecoTot = document.createElement('div');
  const igual = document.createElement('p');

  cifrao.innerHTML = 'R$';
  cifrao2.innerHTML = 'R$';
  cifraoUniVezQtd.innerHTML = '15.90';
  cifraoUnitario.innerHTML = '15.90';
  igual.innerHTML = '=';

  cifraoUniVezQtd.className = 'valor';
  cifraoUnitario.className = 'valor';

  div.className = 'linhas-de-calculo';

  divPrecoUn.className = 'divDoPreco divDoPrecoPorPç';
  divPrecoTot.className = 'divDoPreco divDoPrecoTot';
  igual.className = 'igual';

  valoresDoSelect.forEach((tamanho) => {
    const novoTamanho = document.createElement('option');
    novoTamanho.innerHTML = tamanho;
    novoTamanho.value = tamanho;
    select.appendChild(novoTamanho);
  });
  const linhaDoCachorro = document.querySelector('.linha-dog');
  inputQtd.style.width = '40px';

  select.addEventListener('change', multiplicaPelaQtd);
  inputQtd.addEventListener('change', multiplicaPelaQtd);

  criaBtnDelete(div);
  div.appendChild(tamanho);
  div.appendChild(select);
  div.appendChild(qtd);
  div.appendChild(inputQtd);
  divPrecoUn.appendChild(cifrao);
  divPrecoUn.appendChild(cifraoUnitario);
  divPrecoTot.appendChild(cifrao2);
  divPrecoTot.appendChild(cifraoUniVezQtd);
  div.appendChild(divPrecoUn);
  div.appendChild(igual);
  div.appendChild(divPrecoTot);
  linhaDoCachorro.appendChild(div);
  mudaPrecosDeTodasAsDivs();
};

const catBtn = () => {
  const select = document.createElement('select');
  const inputQtd = document.createElement('input');
  const div = document.createElement('div');
  const cifraoUnitario = document.createElement('p');
  const cifraoUniVezQtd = document.createElement('p');
  const cifrao = document.createElement('p');
  const cifrao2 = document.createElement('p');

  const divPrecoUn = document.createElement('div');
  const divPrecoTot = document.createElement('div');
  const igual = document.createElement('p');

  inputQtd.type = 'number';
  inputQtd.min = '1';
  inputQtd.value = '1';
  const valoresDoSelect = tabelaDePrecos.varejo.map(
    (tamanho) => tamanho.tamanho
  );
  const qtd = document.createElement('p');
  qtd.innerHTML = 'Qtd:';
  const tamanho = document.createElement('p');
  tamanho.innerHTML = 'Tamanho:';
  cifrao.innerHTML = 'R$';
  cifrao2.innerHTML = 'R$';
  cifraoUniVezQtd.innerHTML = '15.90';
  cifraoUnitario.innerHTML = '15.90';
  cifraoUniVezQtd.className = 'valor';
  cifraoUnitario.className = 'valor';
  igual.innerHTML = '=';

  div.className = 'linhas-de-calculo';
  divPrecoUn.className = 'divDoPreco divDoPrecoPorPç';
  divPrecoTot.className = 'divDoPreco divDoPrecoTot';
  igual.className = 'igual';

  select.addEventListener('change', multiplicaPelaQtd);
  inputQtd.addEventListener('change', multiplicaPelaQtd);

  valoresDoSelect.forEach((tamanho) => {
    const novoTamanho = document.createElement('option');
    novoTamanho.innerHTML = tamanho;
    novoTamanho.value = tamanho;
    select.appendChild(novoTamanho);
  });
  const linhaDoGato = document.querySelector('.linha-cat');
  inputQtd.style.width = '40px';
  div.appendChild(tamanho);
  div.appendChild(select);
  div.appendChild(qtd);
  div.appendChild(inputQtd);
  divPrecoUn.appendChild(cifrao);
  divPrecoUn.appendChild(cifraoUnitario);
  divPrecoTot.appendChild(cifrao2);
  divPrecoTot.appendChild(cifraoUniVezQtd);
  div.appendChild(divPrecoUn);
  div.appendChild(igual);
  div.appendChild(divPrecoTot);
  linhaDoGato.appendChild(div);
  criaBtnDelete(div);
  mudaPrecosDeTodasAsDivs();
};
let quantidadDEpecas = 0;
const retornaOsPrecosCertos = () => {
  const inputs = document.querySelectorAll('input');
  inputs.forEach(
    (elemento) => (quantidadDEpecas += parseFloat(elemento.value))
  );

  if (quantidadDEpecas >= 30) {
    multiplicadorDaQuantidadePeloPreco('atacado30pç');
  } else if (quantidadDEpecas >= 8) {
    multiplicadorDaQuantidadePeloPreco('atacado8pç');
  } else {
    multiplicadorDaQuantidadePeloPreco('varejo');
  }
};

const calculaTotal = () => {
  if (quantidadDEpecas !== 0) {
    quantidadDEpecas = 0;
  }
  const div = document.createElement('div');
  const p = document.createElement('p');
  const pTotal = document.createElement('p');
  const deleteDiv = document.querySelector('.total');
  const cifrao = document.createElement('p');

  if (deleteDiv) {
    deleteDiv.remove();
  }

  if (parseInt(totalMesMO) !== 0) {
    totalMesMO = 0;
  }

  retornaOsPrecosCertos();

  pTotal.innerHTML = totalMesMO.toFixed(2);
  p.innerHTML = 'Total:';
  cifrao.innerHTML = 'R$';

  div.className = 'total';

  const btnDiv = document.getElementById('div-calculate');

  div.appendChild(p);
  div.appendChild(cifrao);
  div.appendChild(pTotal);

  btnDiv.appendChild(div);
};

function multiplicaPelaQtd(event) {
  // pegar os valor :
  // value do input
  // preço da roupa de acordo com o tamanho
  // fazer uma condicional para o valor do preço da roupa depender da quantidade total de peças
  // e por fim o resultado deve ser a multiplicação do valor na peça pela quantidade
  quantidadDEpecas = 0;

  const click = event.target.parentNode;

  const resultadoDoValorDaPeca = click
    .querySelector('.divDoPrecoTot')
    .querySelector('.valor');
  const valorDeCadaPecaa = click
    .querySelector('.divDoPrecoPorPç')
    .querySelector('.valor');
  const quantidade = click.querySelector('input');

  const inputs = document.querySelectorAll('input');
  inputs.forEach(
    (elemento) => (quantidadDEpecas += parseFloat(elemento.value))
  );

  const select = click.querySelector('select').value;

  let tabelaDePrecoDeAcordoComQtd;

  if (quantidadDEpecas >= 30) {
    tabelaDePrecoDeAcordoComQtd = tabelaDePrecos.atacado30pç;
  } else if (quantidadDEpecas >= 8) {
    tabelaDePrecoDeAcordoComQtd = tabelaDePrecos.atacado8pç;
  } else {
    tabelaDePrecoDeAcordoComQtd = tabelaDePrecos.varejo;
  }

  const precoDaPeca = tabelaDePrecoDeAcordoComQtd.find(
    (elemento) => elemento.tamanho === select
  ).preco;

  resultadoDoValorDaPeca.innerHTML = (precoDaPeca * quantidade.value).toFixed(
    2
  ); // valorDoTamanho * quantidade.value; // resultaado da multiplicação da quantidade pelo valor

  valorDeCadaPecaa.innerHTML = precoDaPeca;
  mudaPrecosDeTodasAsDivs();
}

function mudaPrecosDeTodasAsDivs() {
  quantidadDEpecas = 0;

  document.querySelectorAll('input').forEach((elemento) => {
    quantidadDEpecas += parseFloat(elemento.value);
  });
  document.querySelectorAll('input').forEach((elemento) => {
    let tabelaDePrecoDeAcordoComQtd;

    const precounitario = elemento.parentNode
      .querySelector('.divDoPrecoPorPç')
      .querySelector('.valor');

    const precototal = elemento.parentNode
      .querySelector('.divDoPrecoTot')
      .querySelector('.valor');

    const select = elemento.parentNode.querySelector('select').value;

    const input = elemento.parentNode.querySelector('input').value;

    if (quantidadDEpecas >= 30) {
      tabelaDePrecoDeAcordoComQtd = tabelaDePrecos.atacado30pç;
    } else if (quantidadDEpecas >= 8) {
      tabelaDePrecoDeAcordoComQtd = tabelaDePrecos.atacado8pç;
    } else {
      tabelaDePrecoDeAcordoComQtd = tabelaDePrecos.varejo;
    }

    const precoDaPeca = tabelaDePrecoDeAcordoComQtd.find(
      (ele) => ele.tamanho === select
    ).preco;

    precounitario.innerHTML = precoDaPeca.toFixed(2);

    precototal.innerHTML = (parseFloat(input) * precoDaPeca).toFixed(2);
  });
}

btnDog.addEventListener('click', dogBtn);

btnCat.addEventListener('click', catBtn);

btnCalculate.addEventListener('click', calculaTotal);

function criaBtnDelete(ondeApendaa) {
  const divDelete = document.createElement('div');
  const plus = document.createElement('div');
  plus.className = 'plus';
  divDelete.appendChild(plus);
  divDelete.className = 'btn-delete';
  divDelete.addEventListener('click', deletaAlinha);
  ondeApendaa.appendChild(divDelete);
}

function deletaAlinha(event) {
  if(event.target.parentNode.className === 'linhas-de-calculo') {
    event.target.parentNode.remove();
    mudaPrecosDeTodasAsDivs();
  } else {
    event.target.parentNode.parentNode.remove();
    mudaPrecosDeTodasAsDivs();
  }
}
