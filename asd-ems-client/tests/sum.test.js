const sum = require('./sum');


describe('addition test (ABDULLAH SLIMANI)', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
})