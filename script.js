const main = document.querySelector('main');
const color = document.querySelector('.color');

const createSection = document.createElement('section');
createSection.id = 'pixel-board';
main.appendChild(createSection);

for (let index = 0; index < 5; index += 1) {
  for (let i = 0; i < 5; i += 1) {
    const div = document.createElement('div');
    div.className = 'pixel';
    createSection.appendChild(div);
  }
}
