const mod = require("./sum.js");

const TestEnum = Object.freeze({
    Ones:0,
    Twos:1,
    Threes:2,
    Fours:3,
    Fives:4,
    Sixes:5,
    ThreeOfAKind:6
});



test('Les des 1 1 1 1 1 doivent retourner 5 pour Ones', () => {
    var des = [1, 1, 1, 1, 1];
    expect(mod.Count(des)[TestEnum.Ones]).toBe(5);
});

test('Les des 1 2 3 4 5 doivent retourner 2 pour Twos.', () => {
    var des = [1, 2, 3, 4, 5];
    expect(mod.Count(des)[TestEnum.Twos]).toBe(2);
});

test('Les des 1 6 3 6 5 doivent retourner 12 pour Sixes.', () => {
    var des = [1, 6, 3, 6, 5];
    expect(mod.Count(des)[TestEnum.Sixes]).toBe(12);
});

test('Les des 1 1 1 2 3 doivent retourner 8 pour ThreeOfAKind.', () => {
    var des = [1, 1, 1, 2, 3];
    expect(mod.Count(des)[TestEnum.ThreeOfAKind]).toBe(8);
});
