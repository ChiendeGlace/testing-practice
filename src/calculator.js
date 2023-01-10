const calculator = {
    add: (a, b) => {
        if (isNaN(a) || isNaN(b)) return `Arguments are not numbers`;
        return a + b;
    },
    subtract: (a, b) => {
        if (isNaN(a) || isNaN(b)) return `Arguments are not numbers`;
        return a - b;
    },
    divide: (a, b) => {
        if (isNaN(a) || isNaN(b)) return `Arguments are not numbers`;
        if (b == 0) return `Can't divide`;
        return a / b;
    },
    multiply: (a, b) => {
        if (isNaN(a) || isNaN(b)) return `Arguments are not numbers`;
        return a * b;
    },
};

module.exports = calculator;
