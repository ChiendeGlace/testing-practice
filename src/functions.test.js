const capitalize = require('./capitalize.js');
const reverseString = require('./reverseString.js');
const calculator = require('./calculator.js');

test('Capitalize the string', () => {
    expect(capitalize('snake')).toBe('Snake');
});

test('Reject other than string', () => {
    expect(capitalize(45454)).toBe('Not a string');
});

test('Lowercase letters following the first one', () => {
    expect(capitalize('tArAnTUla')).toBe('Tarantula');
});

test('Reverse a string', () => {
    expect(reverseString('cake')).toBe('ekac');
});

test('Reverse a string', () => {
    expect(reverseString('tArAnTUla')).toBe('alUTnArAt');
});

test('Add numbers', () => {
    expect(calculator.add(2, 6)).toBe(8);
});

test('Divide by 0', () => {
    expect(calculator.divide(2, 0)).toBe(`Can't divide`);
});

test('Reject strings or objects', () => {
    expect(calculator.subtract('hgdh', 6)).toBe('Arguments are not numbers');
});

test('')
