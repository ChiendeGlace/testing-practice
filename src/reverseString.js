const reverseString = (string) => {
    if (typeof string !== 'string') return 'Not a string';
    const reversed = [];
    string.split('').forEach((letter) => reversed.unshift(letter));
    return reversed.join('');
};

module.exports = reverseString;
