const mod = require("./sum.js");

test('Les des 1 1 1 1 1 doivent retourner 5 pour Ones', () => {
    var des = [1, 1, 1, 1, 1];
    expect(mod.Ones(des)).toBe(5);
});

test('Les des 1 2 3 4 5 doivent retourner 2 pour Twos.', () => {
    var des = [1, 2, 3, 4, 5];
    expect(mod.Twos(des)).toBe(2);
});
