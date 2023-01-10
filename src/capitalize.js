const capitalize = (string) => {
    if (typeof string !== 'string') return 'Not a string';
    const stringSplit = string.split('');
    const sliced = stringSplit.slice(1).join('');
    stringSplit[0] = stringSplit[0].toString().toUpperCase();
    return stringSplit[0] + sliced.toLowerCase();
};

module.exports = capitalize;
