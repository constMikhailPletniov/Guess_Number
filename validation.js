let blocksTextError = document.querySelectorAll('.error'); // Вынести в domObjects.js - доступ к блоку error для вывода сообщения

dom.inputMin.addEventListener('input', validationInput);
dom.inputMax.addEventListener('input', validationInput);
dom.inputAttempts.addEventListener('input', validationInput);
dom.inputUser.addEventListener('input', validationInput);

function validationInput() {
  console.log(Number(this.value));
  //Проверки >0 && целое ли число.
  if (Number(this.value) > 0 && isInteger(Number(this.value))) {
    //или (Number(this.value) ^ 0) === Number(this.value);
    document.querySelector('#btn-start').disabled = false;
    document.querySelector('.btn-generate').disabled = false;
  } else {
    document.querySelector('#btn-start').disabled = true;
    document.querySelector('.btn-generate').disabled = true;
    inputWarningText();
  }
}

function validationStart() {
  if (Number(dom.inputMin.value) < Number(dom.inputMax.value)) {
    ButtonStart(); // function call START
  } else {
    blocksTextError[1].innerText = 'Please, enter correct values!';
    blocksTextError[1].style.color = '#f00';
    setTimeout(buttonExit, 1000); //reset - function clear
  }
}

function inputWarningText() {
  for (el of blocksTextError) {
    el.textContent = 'Please, enter correct values!';
    el.style.color = '#f00';
  }
}
