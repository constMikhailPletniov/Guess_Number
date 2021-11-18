describe('Test app.js', () => {
  it('Value minValue equal 0', () => {
    expect(minValue).to.equal(0);
  });
  it('Value maxValue equal 0', () => {
    expect(maxValue).to.equal(0);
  });
  it('Value attempts equal 0', () => {
    expect(attempts).to.equal(0);
  });
  it('Value count equal 0', () => {
    expect(count).to.equal(0);
  });
  it('Value userValue equal 0', () => {
    expect(userValue).to.equal(0);
  });
  it('prevNum is array', () => {
    expect(prevNum).to.be.an(Array);
  });
});
