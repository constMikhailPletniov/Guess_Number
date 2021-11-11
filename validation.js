let blocksTextError = document.querySelectorAll('.error');

dom.inputMin.addEventListener('input', validationInput);
dom.inputMax.addEventListener('input', validationInput);
dom.inputAttempts.addEventListener('input', validationInput);
dom.inputUser.addEventListener('input', validationInput);

function validationInput() {
    console.log(Number(this.value));
    //Проверки >0 && целое ли число.
    if (Number(this.value) > 0 && (Number(this.value) ^ 0) === Number(this.value)) {
        console.log('true');
        console.log(this.value);
        //или (Number(this.value) ^ 0) === Number(this.value);
        clearWarningText();
        document.querySelector('#btn-start').disabled = false;
        document.querySelector('.btn-generate').disabled = false;
    } else {
        console.log('false');
        console.log(this.value);
        console.log(blocksTextError);
        document.querySelector('#btn-start').disabled = true;
        document.querySelector('.btn-generate').disabled = true;
        inputWarningText();
        setTimeout(clearWarningText, 2000);
    }
}

function validationStart() {
    if (Number(dom.inputMin.value) < Number(dom.inputMax.value)) {
        document.querySelector('#btn-start').disabled = false;
        buttonStart();
    } else {
        inputWarningText();
        setTimeout(clearWarningText, 2000);
    }
}

function inputWarningText() {
    for (el of blocksTextError) {
        el.textContent = 'Please, enter correct values!';
        el.style.color = '#f00';
    }
}

function clearWarningText() {
    for (el of blocksTextError) {
        el.textContent = '';
    }
}