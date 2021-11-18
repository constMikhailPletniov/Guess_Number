function buttonStart() {
    minValue = Number(ElementsDom.inputMin.value);
    maxValue = Number(ElementsDom.inputMax.value);
    attempts = Number(ElementsDom.inputAttempts.value);
    randomValue = random(minValue, maxValue);

    ElementsDom.sectionStartPage.style.display = 'none';
    ElementsDom.sectionGamePage.style.display = 'flex';
    if (ElementsDom.selectLang.value === 'en') {
        ElementsDom.divGreetings.textContent = `Hello, I thought of a number from ${minValue} to ${maxValue} Your range.`;
        ElementsDom.totalNumbersOfAttempts.textContent = `Try to guess it for ${attempts} attempts!`;
        return;
    }
    ElementsDom.divGreetings.textContent = `Привет, Я загадал число от ${minValue} до ${maxValue} Твоего предела.`;
    ElementsDom.totalNumbersOfAttempts.textContent = `Попробуй отгадать за ${attempts} попыток!`;
}

function buttonExit() {

    minValue = 0;
    maxValue = 0;
    attempts = 0;
    randomValue = 0;
    prevNum = 0;
    userValue = 0;
    count = 0;
    prevDistance = 0;
    userValueDistance = 0;

    ElementsDom.generateBtn.disabled = false;
    ElementsDom.inputMin.value = "";
    ElementsDom.inputMax.value = "";
    ElementsDom.inputAttempts.value = "";
    ElementsDom.inputUser.value = "";
    ElementsDom.divOut.textContent = "";
    ElementsDom.remainingAttempts.textContent = "";
    ElementsDom.sectionStartPage.style.display = 'flex';
    ElementsDom.sectionGamePage.style.display = 'none';
    for (let item of ElementsDom.divImg) {
        item.style.display = 'none';
    }
    ElementsDom.totalNumbersOfAttempts.textcontent = "";
    ElementsDom.divGreetings.textContent = "";
}