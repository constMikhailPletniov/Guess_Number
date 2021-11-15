let minValue = 0;
let maxValue = 0;
let attempts = 0;
let randomValue = 0;
let prevNum = [];
let userValue = 0;
let count = 0;
let prevDistance = 0;
let userValueDistance = 0;

dom.startBtn.addEventListener('click', validateStart);
dom.generateBtn.addEventListener('click', buttonGenerate);
dom.exitBtn.addEventListener('click', buttonExit);
dom.inputMin.addEventListener('input', validateInput);
dom.inputMax.addEventListener('input', validateInput);
dom.inputAttempts.addEventListener('input', validateInput);
dom.inputUser.addEventListener('input', validateInput);
