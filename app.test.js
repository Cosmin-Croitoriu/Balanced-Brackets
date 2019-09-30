const balancedBrackets = require('./app');

test ("if given an empty string it returns an empty string", () => {
    expect(balancedBrackets('')).toBe('empty string');
});

