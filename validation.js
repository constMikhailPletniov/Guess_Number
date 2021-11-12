//let blocksTextError = document.querySelectorAll('.error');



function validationInput() {
    console.log(Number(this.value));
    //Проверки >0 && целое ли число.
    if (Number(this.value) > 0 && (Number(this.value) ^ 0) === Number(this.value)) {
        console.log('true');
        console.log(this.value);
        //или (Number(this.value) ^ 0) === Number(this.value);
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

function validationStart() {
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