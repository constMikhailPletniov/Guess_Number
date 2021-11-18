describe('Test validation.js', () => {
  it('Should be correct value', () => {
    let el = (document.querySelector('#minValue').value = 1);
    expect(validateInput(el)).to.equal('Please, enter correct values!');
  });

  it('Should be inputWarningText', () => {
    expect(inputWarningText()).to.equal('Please, enter correct values!');
  });
  it('Should be clearWarningText', () => {
    expect(clearWarningText()).to.be.empty();
  });
});
