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

// Criação do botão
const clearButton = document.createElement('button');
clearButton.id = 'clear-board';
clearButton.textContent = 'Limpar';

// Insere o botão entre a paleta de cores e o quadro de pixels
main.insertBefore(clearButton, createSection);

// Função para limpar o quadro
function clearBoard() {
  // Obtém todos os pixels na grade
  const allPixels = document.querySelectorAll('.pixel');

  // Define a cor de fundo de todos os pixels como branco
  allPixels.forEach((pixel) => {
    pixel.style.backgroundColor = 'white';
  });
}

// Adiciona um ouvinte de evento de clique ao botão de limpar
clearButton.addEventListener('click', clearBoard);

// Criação do botão para cores aleatórias
const randomColorButton = document.createElement('button');
randomColorButton.id = 'button-random-color';
randomColorButton.textContent = 'Cores aleatórias';

// Insere o botão entre a paleta de cores e o quadro de pixels
main.insertBefore(randomColorButton, createSection);

// Função para gerar cores aleatórias
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let index = 0; index < 6; index += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Função para aplicar cores aleatórias à paleta
function generateRandomColors() {
  colors.forEach((color) => {
    color.style.backgroundColor = getRandomColor();
  });
}

// Adiciona um ouvinte de evento de clique ao botão de cores aleatórias
randomColorButton.addEventListener('click', generateRandomColors);

// Função para preencher um pixel com a cor selecionada e salvar no localStorage
function fillPixels(event) {
  const selectedColor = document.querySelector('.color.selected');

  if (selectedColor) {
    const backgroundColor = selectBackground(selectedColor);

    // Encontra o índice do pixel clicado dentro do array de pixels
    const pixelIndex = Array.from(pixels).indexOf(event.currentTarget);

    // Verifica se o índice foi encontrado
    if (pixelIndex !== -1) {
      console.log(`Salvando pixel_${pixelIndex}: ${backgroundColor} no localStorage`);
      localStorage.setItem(`pixel_${pixelIndex}`, backgroundColor);
      event.currentTarget.style.backgroundColor = backgroundColor;
    } else {
      console.error('Índice do pixel não encontrado!');
    }
  }
}

// Função para recuperar o desenho do localStorage ao carregar a página
function loadSavedPixels() {
  pixels.forEach((pixel, index) => {
    const savedColor = localStorage.getItem(`pixel_${index}`);
    if (savedColor) {
      pixel.style.backgroundColor = savedColor;
    }
  });
}

// Adiciona um ouvinte de evento de clique a cada pixel na grade
pixels.forEach((pixel) => {
  pixel.addEventListener('click', fillPixels);
});

function loadBoardSize() {
  const savedBoardSize = localStorage.getItem('boardSize');
  console.log('Tamanho do board carregado:', savedBoardSize);

  if (savedBoardSize) {
    const boardSizeInput = document.getElementById('board-size');
    boardSizeInput.value = savedBoardSize;
    generateBoard(); // Chama a função para gerar o quadro com o tamanho salvo
  }
}

// Carrega os pixels salvos ao carregar a página
loadSavedPixels();

// Adiciona um ouvinte de evento de clique ao botão "VQV"
const generateBoardButton = document.getElementById('generate-board');
generateBoardButton.addEventListener('click', generateBoard);

// Função para gerar o quadro com base no valor do input
function generateBoard() {
  const boardSizeInput = document.getElementById('board-size');
  let boardSize = parseInt(boardSizeInput.value);

  // Verifica se o valor inserido é válido
  if (isNaN(boardSize) || boardSize <= 0) {
    alert('Board inválido! O tamanho mínimo é 5 pixels.');
    boardSize = 5; // Define o tamanho padrão como 5 pixels
  } else if (boardSize > 50) {
    alert('Board inválido! O tamanho máximo é 50 pixels.');
    boardSize = 50; // Define o tamanho máximo como 50 pixels
  }

  // Limpa o quadro atual
  createSection.innerHTML = '';

  // Limita o tamanho do quadro entre 5 e 50 pixels
  boardSize = Math.min(Math.max(boardSize, 5), 50);

  // Cria o novo quadro
  for (let row = 0; row < boardSize; row += 1) {
    for (let col = 0; col < boardSize; col += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      createSection.appendChild(pixel);
    }
  }
}

