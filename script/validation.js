//let blocksTextError = document.querySelectorAll('.error');



function validationInput() {
    console.log(Number(this.value));
    //Проверки >0 && целое ли число.
    if (Number(this.value) > 0 && (Number(this.value) ^ 0) === Number(this.value)) {
        console.log('true');
        console.log(this.value);
        //или (Number(this.value) ^ 0) === Number(this.value);
        ElementsDom.startBtn.disabled = false;
        ElementsDom.generateBtn.disabled = false;
        return clearWarningText();

    } else {
        console.log('false');
        console.log(this.value);
        console.log(ElementsDom.blocksTextError);
        ElementsDom.startBtn.disabled = true;
        ElementsDom.generateBtn.disabled = true;
        return inputWarningText();
    }
}

function validationStart() {
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