exports.Ones = function Ones(des) {
    var result=0;

    for (var i = 0; i < des.length; i++) {
        if (des[i] == 1) {
            result++;
        }
    }

    return result;
}