function buttonStart() {
    minValue = Number(dom.inputMin.value);
    maxValue = Number(dom.inputMax.value);
    attempts = Number(dom.inputAttempts.value);
    randomValue = random(minValue, maxValue);

    dom.sectionStartPage.style.display = 'none';
    dom.sectionGamePage.style.display = 'flex';
    dom.divGreetings.textContent = `Hello, I thought of a number from ${minValue} to ${maxValue} Your range.`;
    dom.totalNumbersOfAttempts.textContent = `Try to guess it for ${attempts} attempts!`;
}