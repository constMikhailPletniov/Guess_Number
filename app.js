const startPage = document.querySelector('.start-page');
const gamePage = document.querySelector('.game-page');

const maxValue = 10;
const minValue = 5;

function random(minValue, maxValue) {
  if (typeof maxValue === 'number' && typeof minValue === 'number' && minValue > 0 && minValue < maxValue && maxValue < 201 && minValue === minValue && maxValue === maxValue) {
    return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  }
}
random(minValue, maxValue);
