exports.Ones = function Ones(des) {
    var result=0;

    for (var i = 0; i < des.length; i++) {
        if (des[i] == 1) {
            result++;
        }
    }
    return result;
}

exports.Twos = function Twos(des) {
    var result=0;

    for (var i = 0; i < des.length; i++) {
        if (des[i] == 2) {
            result+=2;
        }
    }
    return result;
}