const analyzeArray = (array) => {
    if (!Array.isArray(array)) return 'You need to pass an array';
    const min = Math.min(...array);
    const max = Math.max(...array);
    const average = array.reduce((prev, cur) => prev + cur) / array.length;
    const length = array.length;
    return {
        min,
        max,
        average,
        length,
    };
};

module.exports = analyzeArray;
