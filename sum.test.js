const mod = require("./sum.js");

const TestEnum = Object.freeze({
    Ones:0,
    Twos:1,
    Threes:2,
    Fours:3,
    Fives:4,
    Sixes:5,
    ThreeOfAKind:6,
    FourOfAKind:7,
    FullHouse:8,
    SmallStraight:9,
    LargeStraight:10
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

test('Les des 1 1 2 2 3 doivent retourner 0 pour ThreeOfAKind.', () => {
    var des = [1, 1, 2, 2, 3];
    expect(mod.Count(des)[TestEnum.ThreeOfAKind]).toBe(0);
});

test('Les des 1 1 1 1 2 doivent retourner 6 pour FourOfAKind.', () => {
    var des = [1, 1, 1, 1, 2];
    expect(mod.Count(des)[TestEnum.FourOfAKind]).toBe(6);
});

test('Les des 1 1 1 2 2 doivent retourner 0 pour FourOfAKind.', () => {
    var des = [1, 1, 1, 2, 2];
    expect(mod.Count(des)[TestEnum.FourOfAKind]).toBe(0);
});

test('Les des 1 1 1 2 2 doivent retourner 25 pour FullHouse.', () => {
    var des = [1, 1, 1, 2, 2];
    expect(mod.Count(des)[TestEnum.FullHouse]).toBe(25);
});

test('Les des 1 1 2 2 4 doivent retourner 0 pour FullHouse.', () => {
    var des = [1, 1, 2, 2, 4];
    expect(mod.Count(des)[TestEnum.FullHouse]).toBe(0);
});

test('Les des 1 2 3 4 4 doivent retourner 30 pour SmallStraight.', () => {
    var des = [1, 2, 3, 4, 4];
    expect(mod.Count(des)[TestEnum.SmallStraight]).toBe(30);
});

test('Les des 1 2 3 4 5 doivent retourner 40 pour LargeStraight.', () => {
    var des = [1, 2, 3, 4, 5];
    expect(mod.Count(des)[TestEnum.LargeStraight]).toBe(40);
});

