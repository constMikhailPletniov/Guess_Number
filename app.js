
let minValue = 0;
let maxValue = 0;
let attempts = 0;
let getRandomValue = 0;

document.querySelector('.btn-start').addEventListener('click', () => {

    minValue = Number(document.querySelector('#min-number').value);
    maxValue = Number(document.querySelector('#max-number').value);
    attempts = Number(document.querySelector('#attempts').value);
    getRandomValue = random(minValue, maxValue);
    staticAttemptsValue = attempts;


    document.querySelector('.start-page').style.display = 'none';
    document.querySelector('.game-page').style.display = 'flex';
    document.querySelector('.greetings').textContent = `Привет, я загадал число от ${minValue} до ${maxValue} вашего диапазона. Попробуй угадать его за ${attempts} попыток!`;
    return minValue, maxValue, attempts, getRandomValue, staticAttemptsValue;
});


let prevNum = [];
let userValue = 0;
let count = 0;
let prevDistance = 0;
let userValueDistance = 0;

document.querySelector('.btn-generate').addEventListener('click', () => {


    userValue = Number(document.querySelector('#userValue').value);
    count++;
    attempts--;

    switch (true) {
        case (count === 1 && getRandomValue !== userValue):
            prevNum.push(userValue);
            break;
        case attempts < 0:
            document.querySelector('.btn-generate').disabled = true;
            document.querySelector('.out').textContent = 'Прости, попытки закончились';
            break;
        case getRandomValue === userValue:
            document.querySelector('.out').textContent = `Поздравляю! Ты угадал задуманное число за ${count} попыток`;
            document.querySelector('.btn-generate').disabled = true;
            break;
        case (count >= 2 && getRandomValue !== userValue):
            prevNum.push(userValue);
            prevDistance = getRandomValue - prevNum.at(-2);
            userValueDistance = getRandomValue - userValue;

            switch (true) {

                case (Math.abs(prevDistance) > Math.abs(userValueDistance)):
                    document.querySelector('.out').textContent = `Не угадал, но теплее!!! Осталось ${attempts} попыток`;
                    break;
                case (Math.abs(prevDistance) < Math.abs(userValueDistance)):
                    document.querySelector('.out').textContent = `Не угадал, холоднее… Осталось ${attempts} попыток`;
                    break;
            }
            break;
    }

});

document.querySelector('.btn-exit').addEventListener('click', () => {

    minValue = 0;
    maxValue = 0;
    attempts = 0;
    getRandomValue = 0;
    count = 0;
    prevNum = [];
    prevDistance = 0;
    userValueDistance = 0;

    document.querySelector('.btn-generate').disabled = false;
    document.querySelector('#min-number').value = '1';
    document.querySelector('#max-number').value = '2';
    document.querySelector('#attempts').value = '1';
    document.querySelector('#userValue').value = "";
    document.querySelector('.out').textContent = "";
    document.querySelector('.start-page').style.display = 'flex';
    document.querySelector('.game-page').style.display = 'none';
});

