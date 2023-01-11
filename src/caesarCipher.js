const changeBy1 = (array) => {
    array.forEach((number) => number + 1);
};

const caesarCipher = (string, shift = 1) => {
    if (typeof string !== 'string') return 'Not a string';
    const charCodes = [];
    for (let i = 0; i < string.split('').length; i++) {
        charCodes.push(string.charCodeAt(i));
    }
    const mapped = charCodes.map((number) => {
        if (number >= 65 && number <= 90) {
            if (number + shift > 90) {
                return 64 + (number - 90 + shift);
            }
            return number + shift;
        }
        if (number >= 97 && number <= 122) {
            if (number + shift > 122) {
                return 96 + (number - 122 + shift);
            }
            return number + shift;
        }
        return number;
    });
    return String.fromCharCode(...mapped);
};

module.exports = caesarCipher;

