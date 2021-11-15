function buttonExit() {
    minValue = 0;
    maxValue = 0;
    attempts = 0;
    randomValue = 0;
    count = 0;
    prevNum.length = 0;
    prevDistance = 0;
    userValueDistance = 0;

    ElementsDom.generateBtn.disabled = false;
    ElementsDom.inputMin.value = '';
    ElementsDom.inputMax.value = '';
    ElementsDom.inputAttempts.value = '';
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