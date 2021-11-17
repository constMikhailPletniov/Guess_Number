
for (let i = 0; i < ElementsDom.inputs.length; i++) {
    ElementsDom.inputs[i].addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            e.preventDefault();
            let nextInput = document.querySelectorAll('[tabIndex="' + (this.tabIndex + 1) + '"]');
            if (nextInput.length === 0) {
                nextInput = document.querySelectorAll('[tabIndex="1"]');
            }
            nextInput[0].focus();
        }
    });
}