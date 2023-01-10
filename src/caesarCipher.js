const changeBy1 = (array) => {
    array.forEach(number => number +1);
}

const caesarCipher = (string) => {
    if (typeof string !== 'string') return 'Not a string';
    const charCodes = [];
    for (let i = 0; i < string.split('').length; i++) {
            charCodes.push(string.charCodeAt(i));
    }
    const mapped = charCodes.map(number => {
        if (number == 90) return 65;
        if (number == 122) return 97;
        if ((number >= 65 && number < 90) || (number >= 97 && number < 122)) {
            return number + 1;
        }
        return number;
    });
    return String.fromCharCode(...mapped);
};

module.exports = caesarCipher;
