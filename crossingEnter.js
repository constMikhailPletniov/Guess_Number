const inputs = document.querySelectorAll('.input');

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('keypress', function (e) {
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
