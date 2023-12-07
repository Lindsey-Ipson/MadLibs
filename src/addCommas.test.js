const { addCommas } = require('./addCommas');

console.log(addCommas);
console.log(addCommas.addCommas);

describe('addCommas', () => {
  test('formats positive integers with commas', () => {
    expect(addCommas(1234)).toBe('1,234');
    expect(addCommas(1000000)).toBe('1,000,000');
    expect(addCommas(9876543210)).toBe('9,876,543,210');
  });

  test('handles single-digit number', () => {
    expect(addCommas(6)).toBe('6');
  });

  test('formats negative integers with commas', () => {
    expect(addCommas(-10)).toBe('-10');
    expect(addCommas(-5678)).toBe('-5,678');
  });

  // Bonus tests for decimal numbers
  // test('formats decimal numbers with commas', () => {
  //   expect(addCommas(12345.678)).toBe('12,345.678');
  //   expect(addCommas(-3141592.65)).toBe('-3,141,592.65');
  // });
});
