describe('Test random.js', () => {
  it('Should be max', () => {
    expect(random(3, 9)).to.be.a('number');
  });
  it('Should be undefined for string first argument', () => {
    expect(random(3, '9')).to.equal(undefined);
  });
  it('Should be undefined for string second argument', () => {
    expect(random('3', 9)).to.equal(undefined);
  });
  it('Should undefined with uncorrect values', () => {
    expect(random(9, 3)).to.equal(undefined);
  });
});
