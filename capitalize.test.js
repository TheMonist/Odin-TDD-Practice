const capitalize = require('./capitalize');

test('Capitalized Letter', () => {
    expect(capitalize('string')).toBe('String');
});

test('Uncapitalized', () => {
    expect('String').not.toBe('string');
});