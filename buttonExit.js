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
    dom.inputMin.value = '';
    dom.inputMax.value = '';
    dom.inputAttempts.value = '';
    dom.inputUser.value = "";
    dom.divOut.textContent = "";
    dom.remainingAttempts.textContent = "";
    dom.sectionStartPage.style.display = 'flex';
    dom.sectionGamePage.style.display = 'none';
    for(let item of dom.divImg){
        item.style.display = 'none';
    }
    dom.totalNumbersOfAttempts.textcontent = "";
    dom.divGreetings.textContent = "";
}