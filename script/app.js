
let minValue = 0;
let maxValue = 0;
let attempts = 0;
let randomValue = 0;
let prevNum = [];
let userValue = 0;
let count = 0;
let prevDistance = 0;
let userValueDistance = 0;

ElementsDom.startBtn.addEventListener('click', validationStart);
ElementsDom.generateBtn.addEventListener('click', buttonGenerate);
ElementsDom.exitBtn.addEventListener('click', buttonExit);
ElementsDom.inputMin.addEventListener('input', validationInput);
ElementsDom.inputMax.addEventListener('input', validationInput);
ElementsDom.inputAttempts.addEventListener('input', validationInput);
ElementsDom.inputUser.addEventListener('input', validationInput);
ElementsDom.btnClear.addEventListener('click', buttonExit);
ElementsDom.selectLang.addEventListener('change', changeLanguage);
ElementsDom.questionIcon.addEventListener('mouseover', () => {
    ElementsDom.instruction.style.display = 'block'
    ElementsDom.windowElement.style.opacity = '0.3'
});
ElementsDom.questionIcon.addEventListener('mouseout', () => {
    ElementsDom.instruction.style.display = 'none'
    ElementsDom.windowElement.style.opacity = '1'
});
ElementsDom.switchMode.addEventListener('click', () => {
    if (ElementsDom.theme.getAttribute('href') === 'style.css') {
        ElementsDom.theme.href = 'yellow-mode.css';
    } else {
        ElementsDom.theme.href = 'style.css';
    }
});