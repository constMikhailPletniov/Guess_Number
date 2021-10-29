const count = document.querySelector('#attempts'); //из инпута
const maxValue = document.querySelector('#max-value'); //из инпута
const minValue = document.querySelector('#min-value'); //из инпута

const maxValue = 10;
const minValue = 2;

function random(minValue, maxValue) {
  if (
    typeof maxValue === 'number' &&
    typeof minValue === 'number' &&
    minValue > 0 &&
    minValue < maxValue &&
    maxValue < 201 &&
    minValue === minValue &&
    maxValue === maxValue
  ) {
    let count =
      Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    console.log(count);
    return count;
  } else {
    let count =
      Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    console.log(count);
    return count;
  }
}
random(minValue, maxValue);
