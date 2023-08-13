const calculator = require('./calculator');

test('Addition', () => {
    expect(calculator.add(1, 2)).toBe(3);
})

test('Subtraction', () => {
    expect(calculator.subtract(2, 1)).toBe(1);
})

test('Multiplication', () => {
    expect(calculator.multiply(1, 2)).toBe(2);
})

test('Division', () => {
    expect(calculator.divide(6, 3)).toBe(2);
})