exports.Count = function Count(des) {
    var result = [0, 0, 0, 0, 0, 0];

    for (var i = 0; i < des.length; i++) {
        result[des[i] - 1] += des[i];
    }

    return result;
}

exports.ThreeOfAKind = function ThreeOfAKind(des) {
    var result = 0;
    var count = [0, 0, 0, 0, 0, 0];

    for (var i = 0; i < des.length; i++) {
        count[des[i] - 1] += 1;
    }
    for (var i = 0; i < count.length; i++) {
        if (count[i] >= 3){
            for (var j = 0; j < des.length; j++) {
                result += des[j];
            }
        }
    }

    return result;
}
