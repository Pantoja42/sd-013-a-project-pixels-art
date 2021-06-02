const listaDeCor = 'lista-de-cor';
const pixelBoard = '#pixel-board';
const input = document.querySelector('input');

function criaUlDeCor(id) {
  const ul = document.createElement('ul');
  const nav = document.getElementById(id);
  nav.appendChild(ul);
  ul.id = listaDeCor;
}

function criaLiCores(id, n) {
  const ul = document.getElementById(id);
  for (let index = 1; index <= n; index += 1) {
    const li = document.createElement('li');
    ul.appendChild(li);
    if (index === 1) {
      li.className = 'color selected';
    } else {
      li.className = 'color';
    }
  }
}

function CoresDisponiveis() {
  const cores = ['black', 'green', 'orange', 'red'];
  return cores;
}

function atribuindoCoresSelecionadas() {
  const cor = document.querySelectorAll('.color');
  const cores = CoresDisponiveis();
  for (let i = 0; i < cores.length; i += 1) {
    cor[i].style.backgroundColor = cores[i];
  }
}

criaUlDeCor('color-palette');
criaLiCores(listaDeCor, 4);
atribuindoCoresSelecionadas();

function AdicionaPixels(referencia) {
  const quant = referencia.value; if (quant < 5 || quant > 15) { referencia.value = 'error'}
  const criarBoard = document.createElement('section');
  document.body.appendChild(criarBoard);
  criarBoard.setAttribute('id', 'pixel-board');
  const lugarDaLinha = document.querySelector(pixelBoard);
  let pixelNumeroN = 0;
  for (let linha = 1; linha <= quant; linha += 1) {
    const line = document.createElement('ul');
    lugarDaLinha.appendChild(line);
    for (let coluna = 1; coluna <= quant; coluna += 1) {
      const column = document.createElement('li');
      line.appendChild(column);
      column.className = 'pixel';
      column.id = `pixel ${pixelNumeroN}`;
      pixelNumeroN += 1;
    }
  }
  mudaCorDoPixel()
}

AdicionaPixels(input);

function removePixels() {
  const tabelaDePixel = document.querySelector(pixelBoard);
  tabelaDePixel.parentNode.removeChild(tabelaDePixel);
}

input.addEventListener('keyup', () => {
  removePixels();
  AdicionaPixels(input);
});

function changeColor(event) {
  const NovaCor = event.target;
  const CorAntiga = document.getElementsByClassName('selected');
  CorAntiga[0].classList.remove('selected');
  NovaCor.classList.add('selected');
}
let classSelecionada = document.querySelector('#lista-de-cor');
classSelecionada.addEventListener('click', changeColor);

function mudaCorDoPixel() {
  function mudaCor(event) {
    const pixelClicado = event.target;
    const corBase = document.getElementsByClassName('selected');
    pixelClicado.style.backgroundColor = corBase[0].style.backgroundColor;
  }
  let pixelNumeroN = 0;
  const quantidade = input.value ** 2;
  for (let i = 0; i < quantidade; i += 1) {
    let elementoDaTabelaPixelada = document.getElementById(`pixel ${pixelNumeroN}`);
    elementoDaTabelaPixelada.addEventListener('click', mudaCor);
    pixelNumeroN += 1;
  }
}
mudaCorDoPixel();

// -----------------------------------------------------------------------------

function CriandoCoresAleatórias(argumento) {
  const ObjectColor = {};
  const elemento = document.querySelectorAll(argumento);
  for (let index = 0; index < elemento.length; index += 1) {
    const r = parseInt(Math.random() * 255, 10);
    const g = parseInt(Math.random() * 255, 10);
    const b = parseInt(Math.random() * 255, 0);
    ObjectColor[`cor: ${index}`] = `rgb(${r}, ${g}, ${b})`;
  }
  return ObjectColor;
}
// CriandoCoresAleatórias(4);



// function changeColorBox() {
//   pixelBoard.addEventListener('click', (event) => {
//     const boxPixel = event.target;
//     if (boxPixel.className === 'pixel') {
//       const selectedColor = document.querySelector('.selected').style.backgroundColor;
//       boxPixel.style.backgroundColor = selectedColor;
//     }
//   });
// }

// changeColorBox();
