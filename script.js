window.onload = function() {
  let initBlack = document.getElementsByClassName('color')[0];
  initBlack.classList.add('selected')

  for (let i = 1; i < 4; i += 1) {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let colorUnit = document.getElementsByClassName('color');
    let strColor = `rgb(${r},${g},${b})`;
    colorUnit[i].style.backgroundColor = strColor;
  }

  let pixelBoard = document.createElement('div');
  pixelBoard.id = 'pixel-board';
  pixelBoard.style.display = 'table';
  document.body.appendChild(pixelBoard);

  let n = 5;

  function fillPixelBoard(n){
    for (let i = 0; i < n; i += 1){
      let pixelRow = document.createElement('div');
      pixelRow.className = 'pixel-row'
      pixelRow.style.display = 'table-row'
      document.getElementById('pixel-board').appendChild(pixelRow);
      for (let j = 0; j < n; j += 1) {
        let pixel = document.createElement('div');
        pixel.className = 'pixel';
        pixel.style.display = 'table-cell'
        pixel.style.backgroundColor = 'white'
        document.getElementsByClassName('pixel-row')[i].appendChild(pixel);
      }
    }
  }

  fillPixelBoard(n);

  document.addEventListener('click', function (event) {
    if ( event.target.classList.contains( 'color' ) ) {
      for (let i = 0; i < 4; i += 1) {
        let colorArray = document.getElementsByClassName('color');
        if (event.target !== colorArray[i]) {
          colorArray[i].classList.remove('selected')
        } else {
          colorArray[i].classList.add('selected')
        }
      }
    }
  }, false);

  document.addEventListener('click', function (event) {
    if ( event.target.classList.contains('pixel') ) {
      let selected = document.getElementsByClassName('selected')[0];
      let selectedColor = window.getComputedStyle(selected, null).getPropertyValue('background-color')
      event.target.style.backgroundColor = selectedColor;
    }
  }, false);

  document.getElementById('clear-board').addEventListener('click', function () {
    let pixelCell = document.getElementsByClassName('pixel')
    for (let i = 0; i < pixelCell.length; i += 1) {
      pixelCell[i].style.backgroundColor = 'white';
    }
  });
  /*
  for (let i = 5; i <= 50; i+= 1) {
    let option = document.createElement('option')
    option.value = i.toString();
    if (i % 5 == 0) {
      option.label = i.toString();
    }
    document.getElementById('tick').appendChild(option)
  }
  */
  document.getElementById('generate-board').addEventListener('click', function () {
    let size = document.getElementById('board-size').value;
    if (size == '') {
      window.alert('Board inválido!');
    } 
    else {
      if (size > 50) {
        size = 50
        document.getElementById('pixel-board').innerHTML = '';
        fillPixelBoard(size);
      } else if (size < 5) {
        size = 5
        document.getElementById('pixel-board').innerHTML = '';
        fillPixelBoard(size);
      } else {
        document.getElementById('pixel-board').innerHTML = '';
        fillPixelBoard(size);
      }
    }
  });
}