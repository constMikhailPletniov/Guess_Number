function validateInput() {
  console.log(Number(this.value));
  if (Number(this.value) > 0 && (Number(this.value) ^ 0) === Number(this.value) && Number(this.value) <= Number(this.max)) {
    console.log('true');
    console.log(this.value);
    dom.startBtn.disabled = false;
    dom.generateBtn.disabled = false;
    return clearWarningText();
  } else {
    console.log('false');
    console.log(this.value);
    console.log(dom.blocksTextError);
    dom.startBtn.disabled = true;
    dom.generateBtn.disabled = true;
    return inputWarningText();
  }
}

function validateStart() {
  if (Number(dom.inputMin.value) < Number(dom.inputMax.value)) {
    dom.startBtn.disabled = false;
    return buttonStart();
  } else {
    return inputWarningText();
  }
}

function inputWarningText() {
  for (el of dom.blocksTextError) {
    el.textContent = 'Please, enter correct values!';
    el.style.color = '#f00';
  }
}

function clearWarningText() {
  for (el of dom.blocksTextError) {
    el.textContent = '';
  }
}
