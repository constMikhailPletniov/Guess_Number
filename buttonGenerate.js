function buttonGenerate() {
    userValue = Number(ElementsDom.inputUser.value);
    count++;
    --attempts;

    switch (true) {
        case (count === 1 && randomValue !== userValue):
            prevNum.push(userValue);
            ElementsDom.divOut.textContent = 'Oops  You missed';
            break;
        case userValue === prevNum.at(-1):
            ElementsDom.divOut.textContent = 'What do You do? You repeated the same value, enter another';
            break;
        case attempts < 0:
            ElementsDom.generateBtn.disabled = true;
            ElementsDom.divOut.textContent = 'I m sorry the attempts are over';
            break;
        case randomValue === userValue:
            ElementsDom.divOut.textContent = `Congratulations! You guessed the intended number in ${count} tries`;
            ElementsDom.generateBtn.disabled = true;

            for (let item of ElementsDom.divImg) {
                console.log(item)
                item.style.display = 'block';
            }
            break;
        case (count >= 2 && randomValue !== userValue):
            prevNum.push(userValue);
            prevDistance = randomValue - prevNum.at(-2);
            userValueDistance = randomValue - userValue;

            if ((Math.abs(prevDistance) > Math.abs(userValueDistance))) {
                ElementsDom.divOut.textContent = `Not guessing, but warmer !!!`;
                ElementsDom.remainingAttempts.textContent = `Remaining ${attempts} attempts`;
                return;
            }
            else if ((Math.abs(prevDistance) < Math.abs(userValueDistance))) {
                ElementsDom.divOut.textContent = `Not guessing, colder ...`;
                ElementsDom.remainingAttempts.textContent = `Remaining ${attempts} attempts`;
                return;
            }
            break;
    }
}