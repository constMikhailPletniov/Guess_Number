
function validateInput() {
    if (Number(this.value) > 0 && (Number(this.value) ^ 0) === Number(this.value) &&
        Number(this.value) <= Number(this.max)) {
        ElementsDom.startBtn.disabled = false;
        ElementsDom.generateBtn.disabled = false;
        clearWarningText();

    } else {
        console.log(ElementsDom.blocksTextError);
        ElementsDom.startBtn.disabled = true;
        ElementsDom.generateBtn.disabled = true;
        inputWarningText();
    }
}

function validateStart() {
    if (Number(ElementsDom.inputMin.value) < Number(ElementsDom.inputMax.value)) {
        ElementsDom.startBtn.disabled = false;
        buttonStart();
    } else {
        inputWarningText();
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
        el.textContent = '';
    }
}