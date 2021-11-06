function buttonStart() {
    minValue = Number(dom.inputMin.value);
    maxValue = Number(dom.inputMax.value);
    attempts = Number(dom.inputAttempts.value);
    randomValue = random(minValue, maxValue);

    dom.sectionStartPage.style.display = 'none';
    dom.sectionGamePage.style.display = 'flex';
    dom.divGreetings.textContent = `Привет, я загадал число от ${minValue} до ${maxValue} вашего диапазона.`;
    dom.totalNumbersOfAttempts.textContent = `Попробуй угадать его за ${attempts} попыток!`;
}