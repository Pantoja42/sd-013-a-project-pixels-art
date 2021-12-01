// THE TITLE -> DESAFIO 1

// Coloca o título 'Paleta de Cores' na página:

const title = document.querySelector('#title');
title.innerHTML = 'Paleta de Cores';

// ------------------------------------------------------------

// THE PALETTE -> DESAFIOS 2 E 3

// Cria um array com as li's  de classe .color:
const palette = document.querySelectorAll('.color');
palette[0].style.backgroundColor = 'black';
palette[1].style.backgroundColor = 'lightgreen';
palette[2].style.backgroundColor = 'yellow';
palette[3].style.backgroundColor = 'violet';

// ------------------------------------------------------------

// THE BOARD -> DESAFIO 4

// Cria um quadro
// (para conter todos os quadrados a serem coloridos pelo usuário):

const board = document.querySelector('#pixel-board');

// Define uma função para preencher o quadro criado anteriormente
// (com os quadrados a serem coloridos pelo usuário):

function fillBoard(number) {
  for (let row = 0; row < number; row += 1) {
    // Cria uma linha para ser preenchida por quadrados.
    const squareRow = document.createElement('div');

    // Preenche a linha criada anteriormente com quadrados.
    for (let column = 0; column < number; column += 1) {
      const square = document.createElement('div');
      square.className = 'pixel';
      square.style.backgroundColor = 'white';
      squareRow.appendChild(square);
    }

    // Anexa a linha preenchida ao board.
    board.appendChild(squareRow);
  }
}
fillBoard(5);

// ------------------------------------------------------------

// APPEARANCE OF SQUARES -> DESAFIO 5

// Define largura, altura, e borda dos quadrados. Ver CSS (.pixel).

// ------------------------------------------------------------

// THE SQUARE COLORATION -> DESAFIO 8

// Define função para colorir os quadrados dentro do quadro:

function coloreQuadrado(cor) {
  const quadrado = document.querySelectorAll('.pixel');
  for (let index = 0; index < quadrado.length; index += 1) {
    quadrado[index].addEventListener('click', (event) => {
      event.target.style.backgroundColor = cor;
    });
  }
}

// ------------------------------------------------------------

// THE FIRST COLOR -> DESAFIO 6

// Coloca 'black' como cor inicial:

localStorage.setItem('corInicial', palette[0].style.backgroundColor);
const corInicial = localStorage.getItem('corInicial');
if (corInicial) coloreQuadrado(corInicial);

// ------------------------------------------------------------

// THE COLOR SELECTION -> DESAFIO 7

// Define função para selecionar uma cor específica
// (pelo mouse, ao clicar na cor desejada na paleta de cores):

for (let index = 0; index < palette.length; index += 1) {
  palette[index].addEventListener('click', (event) => {
    const corSelecionada = document.querySelector('.selected');
    if (event.target.className !== 'color selected') {
      event.target.classList.add('selected');
      corSelecionada.classList.remove('selected');
      coloreQuadrado(event.target.style.backgroundColor);
    }
  });
}

// ------------------------------------------------------------

// THE CLEAR BUTTON -> DESAFIO 9

// Cria variável alvo (botão) para a função de limpar o quadro:

const botaoLimpar = document.querySelector('#clear-board');
botaoLimpar.innerHTML = 'Limpar';

// Define função para colorir os quadrados de branco:

function quadradoBranco() {
  const whiteSquare = document.querySelectorAll('.pixel');
  for (let index = 0; index < whiteSquare.length; index += 1) {
    whiteSquare[index].style.backgroundColor = 'white';
  }
}

// Define função para limpar o quadro:

function limpaQuadro() {
  botaoLimpar.addEventListener('click', quadradoBranco);
}

limpaQuadro();
