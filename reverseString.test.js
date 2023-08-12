const reverseString = require('./reverseString');

test('Reversed String', () => {
    expect(reverseString('Erin')).toMatch('nirE');
});

test('Unreversed String', () => {
    expect(reverseString('Tim')).not.toMatch('Tim');
});