const balancedBrackets = require('./app');

test ("if given an empty string it returns an empty string", () => {
    expect(balancedBrackets('')).toBe('empty string');
});

test ("returns FIL if string has 1 bracket", () => {
    expect(balancedBrackets('[')).toBe('FAIL');
});

test ("returns FAIL if string's First bracket is closed", () => {
    expect(balancedBrackets('][][]')).toBe('FAIL');
});

