let textError = document.getElementById('#error');
//let textError2 = document.getElementById('#error');

userValueminValue.addEventListener('onchange', validationGame);
minValue.addEventListener('onchange', validationStart);
maxValue.addEventListener('onchange', validationStart);

function validationStart() {
  if (Number(dom.inputMin.value) < Number(dom.inputMax.value) && isInteger(dom.inputMin.value) && isInteger(dom.inputMax.value)) {
    ButtonStart(); // function call START
  } else {
    textError.style.color = '#f00';
    textError.innerText = 'Enter correct value!';
    setTimeout(buttonExit, 1000); //reset - function clear
  }
}

function validationGame() {
  if (isInteger(dom.userValue.value) && dom.inputMax.value > 0) {
    ButtonStart(); // function call START
  } else {
    textError2.style.color = '#f00';
    textError2.innerText = 'Enter correct value!';
    setTimeout(buttonExit, 1000); //reset - function clear
  }
}
