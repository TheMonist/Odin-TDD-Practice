const caesarCipher = require('./caesarCipher');

test('Shifted Sentence', () => {
    expect(caesarCipher('Defend the east wall of the castle!', 1)).toMatch('Efgfoe uif fbtu xbmm pg uif dbtumf!');
    expect(caesarCipher('Defend the east wall of the castle!', 5)).toMatch('Ijkjsi ymj jfxy bfqq tk ymj hfxyqj!');
})