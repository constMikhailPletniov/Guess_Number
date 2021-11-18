describe('index.html', () => {
  describe('h1 Guess Game', () => {
    it("h1 element should 'Guess Game'", () => {
      let element = document.querySelector('.logo').value;
      expect(element).to.be.equal(undefined);
    });

    it('Btn Start Page', () => {
      let element = document.querySelector('#btn-start').value;
      expect(element).to.be.equal('START');
    });

    it('Btn clear', () => {
      let element = document.querySelector('#btn-clear').textContent;
      expect(element).to.be.equal('CLEAR');
    });

    it('Btn background', () => {
      let element = document.querySelector('#btn-change-subject').value;
      expect(element).to.be.empty();
    });

    it('Select language', () => {
      let element = document.querySelector('#lang').value;
      expect(element).to.be.equal('en');
    });

    it('Select input min', () => {
      let element = document.querySelector('#minValue').value;
      expect(element).to.be.empty();
    });

    it('Select input input min placeholder', () => {
      let element = document.querySelector('#minValue').placeholder;
      expect(element).to.be.equal('Enter the minimum number between 1 and 199');
    });

    it('Select input min, max value', () => {
      let element = document.querySelector('#minValue').max;
      expect(element).to.be.equal('199');
    });

    it('Select input max', () => {
      let element = document.querySelector('#maxValue').value;
      expect(element).to.be.empty();
    });

    it('Select input input max placeholder', () => {
      let element = document.querySelector('#maxValue').placeholder;
      expect(element).to.be.equal('Enter the maximum number between 2 and 200');
    });

    it('Select input max, min value', () => {
      let element = document.querySelector('#maxValue').min;
      expect(element).to.be.equal('2');
    });

    it('Select input attempts', () => {
      let element = document.querySelector('#attempts').value;
      expect(element).to.be.empty();
    });

    it('Select input attempts placeholder', () => {
      let element = document.querySelector('#attempts').placeholder;
      expect(element).to.be.equal('Enter the number of attempts');
    });

    it('Select div error', () => {
      let element = document.querySelector('.error').textContent;
      expect(element).to.be.empty();
    });

    it('Game page', () => {
      let element = document.querySelector('.game-page').style.display;
      expect(element).to.be.equal('');
    });

    it('Greetings', () => {
      let element = document.querySelector('.greetings').textContent;
      expect(element).to.be.equal('');
    });

    it('Select input user value, min', () => {
      let element = document.querySelector('#userValue').min;
      expect(element).to.be.equal('1');
    });

    it('Select input user value, max', () => {
      let element = document.querySelector('#userValue').max;
      expect(element).to.be.equal('200');
    });

    it('Select input user value, placeholder', () => {
      let element = document.querySelector('#userValue').placeholder;
      expect(element).to.be.equal('Enter your number');
    });

    it('Select input user value, type', () => {
      let element = document.querySelector('#userValue').type;
      expect(element).to.be.equal('number');
    });

    it('Btn GENERATE', () => {
      let element = document.querySelector('.btn-generate').textContent;
      expect(element).to.be.equal('GENERATE');
    });
    it('Btn GENERATE title', () => {
      let element = document.querySelector('.btn-generate').title;
      expect(element).to.be.equal('This button will check if the number you entered is correct');
    });

    it('Btn EXIT', () => {
      let element = document.querySelector('.btn-exit').textContent;
      expect(element).to.be.equal('EXIT');
    });

    it('Btn EXIT title', () => {
      let element = document.querySelector('.btn-exit').title;
      expect(element).to.be.equal('This button will end the game');
    });
  });
});
