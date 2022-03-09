exports.Count = function Count(des) {
    var result = [0, 0, 0, 0, 0, 0];

    for (var i = 0; i < des.length; i++) {
        result[des[i] - 1] += des[i];
    }
    return result;
}
