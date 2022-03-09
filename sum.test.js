const mod = require("./sum.js");

test('Les des 1 1 1 1 1 doivent retourner 5 pour Ones', () => {
    var des = [1, 1, 1, 1, 1];
    expect(mod.Ones(des)).toBe(5);
});