


let pixelBd = document.querySelector('#pixel-board')                                    

function geraBoard(linhas){
  pixelBd.innerHTML = '';
  for (let i = 0; i < linhas; i ++) {
    let linhaPixel = document.createElement('div');
    linhaPixel.className = 'linha';
    pixelBd.appendChild(linhaPixel);
    for (let pix = 0; pix < linhas; pix ++) {
      let pixel = document.createElement('div');
      pixel.className = 'pixel';
      linhaPixel.appendChild(pixel);
    }
    setaCor();
  }
}

window.onload = function() {
  geraBoard(10);
}
//Pega os elementos button
let buttonBlack = document.querySelector('#black');
let buttonRed = document.querySelector('#red');
let buttonGreen = document.querySelector('#green');
let buttonBlue = document.querySelector('#blue');
let color = 'black';

//cria eventos de click/ função anônima
buttonBlack.addEventListener('click', function() {
  buttonBlack.classList.add('selected');
  buttonRed.classList.remove('selected');
  buttonGreen.classList.remove('selected');
  buttonBlue.classList.remove('selected');
  color = window.getComputedStyle(buttonBlack).getPropertyValue('background-color')
})

buttonRed.addEventListener('click', function () {
  buttonRed.classList.add('selected');
  buttonBlack.classList.remove('selected');
  buttonRed.classList.remove('selected');
  buttonBlue.classList.remove('selected');
  color = window.getComputedStyle(buttonRed).getPropertyValue('background-color');
});

buttonGreen.addEventListener('click', function () {
  buttonGreen.classList.add('selected');
  buttonBlack.classList.remove('selected');
  buttonRed.classList.remove('selected');
  buttonBlue.classList.remove('selected');
  color = window.getComputedStyle(buttonGreen).getPropertyValue('background-color');
});

buttonBlue.addEventListener('click', function () {
  buttonBlue.classList.add('selected');
  buttonBlack.classList.remove('selected');
  buttonRed.classList.remove('selected');
  buttonGreen.classList.remove('selected');
  color = window.getComputedStyle(buttonBlue).getPropertyValue('background-color');
});

function setaCor(){
  document.querySelectorAll('.pixel').forEach((att) => {
    att.addEventListener('click', function() {
      att.style.backgroundColor = color;
    });
  });
}