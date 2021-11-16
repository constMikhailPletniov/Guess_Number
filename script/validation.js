function validateInput() {
  if (Number(this.value) > 0 && (Number(this.value) ^ 0) === Number(this.value) && Number(this.value) <= Number(this.max)) {
    ElementsDom.startBtn.disabled = false;
    ElementsDom.generateBtn.disabled = false;
    return clearWarningText();
  } else {
    ElementsDom.startBtn.disabled = true;
    ElementsDom.generateBtn.disabled = true;
    return inputWarningText();
  }
}

function validateStart() {
  if (Number(ElementsDom.inputMin.value) < Number(ElementsDom.inputMax.value)) {
    ElementsDom.startBtn.disabled = false;
    return buttonStart();
  } else {
    return inputWarningText();
  }
}

function inputWarningText() {
  for (el of ElementsDom.blocksTextError) {
    el.textContent = 'Please, enter correct values!';
    el.style.color = '#f00';
  }
}

function clearWarningText() {
  for (el of ElementsDom.blocksTextError) {
    el.textContent = '';
  }
}
