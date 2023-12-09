const main = document.querySelector('main');
const colors = document.querySelectorAll('.color'); // Alteração aqui

const createSection = document.createElement('section');
createSection.id = 'pixel-board';
main.appendChild(createSection);

// cria a grade 5x5
for (let index = 0; index < 5; index += 1) {
  for (let i = 0; i < 5; i += 1) {
    const div = document.createElement('div');
    div.className = 'pixel';
    createSection.appendChild(div);
  }
}

// seleciona a grid
function selectedGrid(event) {
  // Remover a classe 'selected' de todas as cores
  colors.forEach((color) => {
    color.classList.remove('selected');
  });
  // Adicionar a classe 'selected' à cor clicada
  event.target.classList.add('selected');
}

// Adiciona um ouvinte de evento de clique a cada cor da paleta
colors.forEach((color) => {
  color.addEventListener('click', selectedGrid);
});

// seleciona o background da grid
function selectBackground(target) {
  // Obtém o estilo computado do elemento
  // https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
  const cssColors = window.getComputedStyle(target, null);
  const backgroundColors = cssColors.getPropertyValue('background-color');
  return backgroundColors;
}

// Função para preencher um pixel com a cor selecionada
function fillPixel(event) {
  // Obtém a cor selecionada na paleta
  const selectedColor = document.querySelector('.color.selected');

  // Verifica se uma cor foi selecionada
  if (selectedColor) {
    // Obtém a cor de fundo da cor selecionada
    const backgroundColor = selectBackground(selectedColor);

    // Aplica a cor de fundo ao pixel clicado
    event.target.style.backgroundColor = backgroundColor;
  }
}

// Adiciona um ouvinte de evento de clique a cada pixel na grade
const pixels = document.querySelectorAll('.pixel');
pixels.forEach((pixel) => {
  pixel.addEventListener('click', fillPixel);
});
