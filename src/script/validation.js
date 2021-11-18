
function validateInput() {
    if (Number(this.value) > 0 && (Number(this.value) ^ 0) === Number(this.value) &&
        Number(this.value) <= Number(this.max)) {
        ElementsDom.startBtn.disabled = false;
        ElementsDom.generateBtn.disabled = false;
        clearWarningText();

    } else {
        ElementsDom.startBtn.disabled = true;
        ElementsDom.generateBtn.disabled = true;
        return inputWarningText();
    }
}

function validateStart(e) {
    e.preventDefault();

    if (Number(ElementsDom.inputMin.value) < Number(ElementsDom.inputMax.value)) {
        ElementsDom.startBtn.disabled = false;
        return buttonStart();
    } else {
        return inputWarningText();
    }
}

function inputWarningText() {
    for (el of ElementsDom.blocksTextError) {

        if (ElementsDom.selectLang.value === 'ru') {
            return el.textContent = 'Пожалуйста введите правильные значения';
        }
        return el.textContent = 'Please, enter correct values!';

    }
}

function clearWarningText() {
    for (el of ElementsDom.blocksTextError) {

        return el.textContent = '';
    }
}