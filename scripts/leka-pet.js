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
    const qtd = elemento.querySelector('input').value;
    const qtdNumber = parseFloat(qtd);

    const select = elemento.querySelector('select').value;
    const selectNumber = select;

    const selectObj = tabelaDePrecos[opcaoDePreco].find(
      (elemento) => elemento.tamanho === selectNumber
    );

    const selectResult = selectObj.preco;

    const total = qtdNumber * selectResult;
    totalMesMO += total;
  });
};

const dogBtn = () => {
  const select = document.createElement('select');
  const inputQtd = document.createElement('input');
  inputQtd.type = 'number';
  const div = document.createElement('div');
  const valoresDoSelect = tabelaDePrecos.varejo.map(
    (tamanho) => tamanho.tamanho
  );
  const qtd = document.createElement('p');
  qtd.innerHTML = 'Qtd:';
  const tamanho = document.createElement('p');
  tamanho.innerHTML = 'Tamanho:';

  div.className = 'linhas-de-calculo';

  valoresDoSelect.forEach((tamanho) => {
    const novoTamanho = document.createElement('option');
    novoTamanho.innerHTML = tamanho;
    novoTamanho.value = tamanho;
    select.appendChild(novoTamanho);
  });
  const linhaDoCachorro = document.querySelector('.linha-dog');
  inputQtd.style.width = '40px';
  div.appendChild(qtd);
  div.appendChild(inputQtd);
  div.appendChild(tamanho);
  div.appendChild(select);
  linhaDoCachorro.appendChild(div);
};

const catBtn = () => {
  const select = document.createElement('select');
  const inputQtd = document.createElement('input');
  const div = document.createElement('div');
  inputQtd.type = 'number';
  const valoresDoSelect = tabelaDePrecos.varejo.map(
    (tamanho) => tamanho.tamanho
  );
  const qtd = document.createElement('p');
  qtd.innerHTML = 'Qtd:';
  const tamanho = document.createElement('p');
  tamanho.innerHTML = 'Tamanho:';

  div.className = 'linhas-de-calculo';

  valoresDoSelect.forEach((tamanho) => {
    const novoTamanho = document.createElement('option');
    novoTamanho.innerHTML = tamanho;
    novoTamanho.value = tamanho;
    select.appendChild(novoTamanho);
  });
  const linhaDoGato = document.querySelector('.linha-cat');
  inputQtd.style.width = '40px';
  div.appendChild(qtd);
  div.appendChild(inputQtd);
  div.appendChild(tamanho);
  div.appendChild(select);
  linhaDoGato.appendChild(div);
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

  if (deleteDiv) {
    deleteDiv.remove();
  }

  if (parseInt(totalMesMO) !== 0) {
    totalMesMO = 0;
  }

  retornaOsPrecosCertos();

  pTotal.innerHTML = totalMesMO.toFixed(2)
  p.innerHTML = 'Total:';

  div.className = 'total';

  const btnDiv = document.getElementById('div-calculate');

  div.appendChild(p);
  div.appendChild(pTotal);

  btnDiv.appendChild(div);
};

btnDog.addEventListener('click', dogBtn);

btnCat.addEventListener('click', catBtn);

btnCalculate.addEventListener('click', calculaTotal);

