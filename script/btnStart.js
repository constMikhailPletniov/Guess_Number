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