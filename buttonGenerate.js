function buttonGenerate() {
    userValue = Number(dom.inputUser.value);
    count++;
    --attempts;

    switch (true) {
        case (count === 1 && randomValue !== userValue):
            prevNum.push(userValue);
            dom.divOut.textContent = 'Oops  You missed';
            break;
        case userValue === prevNum.at(-1):
            dom.divOut.textContent = 'What do You do? You repeated the same value, enter another';
            break;
        case attempts < 0:
            dom.generateBtn.disabled = true;
            dom.divOut.textContent = 'I m sorry the attempts are over';
            break;
        case randomValue === userValue:
            dom.divOut.textContent = `Congratulations! You guessed the intended number in ${count} tries`;
            dom.generateBtn.disabled = true;

            for(let item of dom.divImg){
                console.log(item)
                item.style.display = 'block';
            }
            break;
        case (count >= 2 && randomValue !== userValue):
            prevNum.push(userValue);
            prevDistance = randomValue - prevNum.at(-2);
            userValueDistance = randomValue - userValue;

            if ((Math.abs(prevDistance) > Math.abs(userValueDistance))) {
                dom.divOut.textContent = `Not guessing, but warmer !!!`;
                dom.remainingAttempts.textContent = `Remaining ${attempts} attempts`;
                return;
            }
            else if ((Math.abs(prevDistance) < Math.abs(userValueDistance))) {
                dom.divOut.textContent = `Not guessing, colder ...`;
                dom.remainingAttempts.textContent = `Remaining ${attempts} attempts`;
                return;
            }
            break;
    }
}