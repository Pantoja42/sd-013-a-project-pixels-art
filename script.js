const desafio1 = () => {
  const h1 = document.createElement('h1');
  const divTitleAlign = document.createElement('div');
  const header = document.createElement('header');
  h1.setAttribute('id', 'title');
  h1.innerText = 'Paleta de Cores';
  divTitleAlign.setAttribute('id', 'title-align');
  divTitleAlign.appendChild(h1);
  header.setAttribute('id', 'topper');
  header.appendChild(divTitleAlign);
  document.body.appendChild(header);
};
desafio1();

// eslint-disable-next-line no-unused-vars
const desafio2e3 = () => {
  // eslint-disable-next-line no-unused-vars
  const section = document.createElement('section');
  const ul = document.createElement('ul');
  ul.setAttribute('id', 'color-palette');
  section.setAttribute('id', 'palette');
  const colors = ['black', 'red', 'blue', 'green'];
  for (let i = 0; i < colors.length; i += 1) {
    const color = colors[i];
    const li = document.createElement('li');
    li.setAttribute('class', 'color');
    li.style.backgroundColor = color;
    ul.appendChild(li);
    section.appendChild(ul);
    document.body.appendChild(section);
  }
};
desafio2e3();
