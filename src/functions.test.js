const capitalize = require('./capitalize.js');
const reverseString = require('./reverseString.js');
const calculator = require('./calculator.js');
const caesarCipher = require('./caesarCipher');
const analyzeArray = require('./analyzeArray.js');

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

test('Message shifted', () => {
    expect(caesarCipher('tomato')).toBe('upnbup');
});

test('Correct uppercase and spaces', () => {
    expect(caesarCipher('Dog eats tomato')).toBe('Eph fbut upnbup');
});

test('Wraps from z to a', () => {
    expect(caesarCipher('Zebra eats banana')).toBe('Afcsb fbut cbobob');
});

test('Allows to shift 13 places', () => {
    expect(caesarCipher('He Eats Apples With a Zebra', 13)).toBe(
        'Ur Rngf Nccyrf Jvgu n Mroen'
    );
});

test('Allows to shift 22 places', () => {
    expect(caesarCipher('He Eats Apples With a Zebra', 22)).toBe(
        'Da Awpo Wllhao Sepd w Vaxnw'
    );
});

test('Outputs array max', () => {
    expect(analyzeArray([1, 3, 5, 7])).toEqual({
        min: 1,
        max: 7,
        average: 4,
        length: 4,
    });
});

test('Rejects other data than array', () => {
    expect(analyzeArray('banana')).toBe('You need to pass an array');
});
