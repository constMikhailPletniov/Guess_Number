function buttonExit() {
    minValue = 0;
    maxValue = 0;
    attempts = 0;
    randomValue = 0;
    count = 0;
    prevNum.length = 0;
    prevDistance = 0;
    userValueDistance = 0;

    dom.generateBtn.disabled = false;
    dom.inputMin.value = '1';
    dom.inputMax.value = '2';
    dom.inputAttempts.value = '1';
    dom.inputUser.value = "";
    dom.divOut.textContent = "";
    dom.remainingAttempts.textContent = "";
    dom.sectionStartPage.style.display = 'flex';
    dom.sectionGamePage.style.display = 'none';
    dom.divImg.display = 'none';
    dom.totalNumbersOfAttempts.textcontent = "";
    dom.divGreetings.textContent = "";
}