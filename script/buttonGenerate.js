function buttonGenerate() {
    userValue = Number(ElementsDom.inputUser.value);
    count++;
    --attempts;

    switch (true) {
        case (count === 1 && randomValue !== userValue):
            prevNum.push(userValue);
            if (ElementsDom.selectLang.value === 'en') {
                return ElementsDom.divOut.textContent = 'Oops  You missed';
            }
            ElementsDom.divOut.textContent = 'Упс  Ты ошибся';
            break;
        case userValue === prevNum.at(-1):
            if (ElementsDom.selectLang.value === 'en') {
                return ElementsDom.divOut.textContent = 'What do You do? You repeated the same value, enter another';
            }
            ElementsDom.divOut.textContent = 'Что Ты делаешь? Ты повторяешь тоже значение, введи другое';
            break;
        case attempts < 0:
            ElementsDom.generateBtn.disabled = true;
            if (ElementsDom.selectLang.value === 'en') {
                return ElementsDom.divOut.textContent = 'I m sorry the attempts are over';
            }
            ElementsDom.divOut.textContent = 'Сожалею, попытки кончились';
            break;
        case randomValue === userValue:
            ElementsDom.generateBtn.disabled = true;
            for (let item of ElementsDom.divImg) {
                item.style.display = 'block';
            }
            if (ElementsDom.selectLang.value === 'en') {
                return ElementsDom.divOut.textContent = `Congratulations! You guessed the intended number in ${count} tries`;
            }
            if (count === 1) {
                return ElementsDom.divOut.textContent = `Поздравляю! Ты отгадал число за ${count} попытку`;
            }
            if (count > 1 && count < 5) {
                return ElementsDom.divOut.textContent = `Поздравляю! Ты отгадал число за ${count} попытки`;
            }
            ElementsDom.divOut.textContent = `Поздравляю! Ты отгадал число за ${count} попыток`;
            break;
        case (count >= 2 && randomValue !== userValue):
            prevNum.push(userValue);
            prevDistance = randomValue - prevNum.at(-2);
            userValueDistance = randomValue - userValue;

            if ((Math.abs(prevDistance) > Math.abs(userValueDistance))) {
                if (ElementsDom.selectLang.value === 'en') {
                    ElementsDom.divOut.textContent = `Not guessing, but warmer !!!`;
                    ElementsDom.remainingAttempts.textContent = `Remaining ${attempts} attempts`;
                    return;
                }
                ElementsDom.divOut.textContent = `Не угадал, но теплее !!!`;
                if (attempts === 1) {
                    return ElementsDom.remainingAttempts.textContent = `Осталось ${attempts} попыток`;
                }
                if (attempts > 1 && attempts < 5) {
                    return ElementsDom.remainingAttempts.textContent = `Осталось ${attempts} попытки`;
                }
                ElementsDom.remainingAttempts.textContent = `Осталось ${attempts} попыток`;
                return;
            }
            else if ((Math.abs(prevDistance) < Math.abs(userValueDistance))) {
                if (ElementsDom.selectLang.value === 'en') {
                    ElementsDom.divOut.textContent = `Not guessing, colder ...`;
                    ElementsDom.remainingAttempts.textContent = `Remaining ${attempts} attempts`;
                    return;
                }
                if (attempts === 1) {
                    ElementsDom.divOut.textContent = `Не угадал, холодно ...`;
                    ElementsDom.remainingAttempts.textContent = `Осталась ${attempts} попытка`;
                    return;
                }
                if (attempts > 1 && attempts < 5) {
                    ElementsDom.divOut.textContent = `Не угадал, холодно ...`;
                    ElementsDom.remainingAttempts.textContent = `Осталась ${attempts} попытки`;
                    return;
                }
                ElementsDom.divOut.textContent = `Не угадал, холодно ...`;
                ElementsDom.remainingAttempts.textContent = `Осталась ${attempts} попыток`;
                return;
            }
            break;
    }
}