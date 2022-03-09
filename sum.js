const TestEnum = Object.freeze({
    Ones:0,
    Twos:1,
    Threes:2,
    Fours:3,
    Fives:4,
    Sixes:5,
    ThreeOfAKind:6,
    FourOfAKind:7,
    FullHouse:8
});

exports.Count = function Count(des) {

    var total = 0;
    var count = [0, 0, 0, 0, 0, 0];
    var result = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    var pair = false;

    for (var i = 0; i < des.length; i++) {
        result[des[i] - 1] += des[i];
        count[des[i] - 1] += 1;
        total += des[i];
    }

    for (var i = 0; i < count.length; i++) {
        switch(count[i]){
        case 2:
            pair = true;
            break;
        case 3:
            result[TestEnum.ThreeOfAKind] = total;
            break;
        case 4:
            result[TestEnum.FourOfAKind] = total;
            break;
        }
    }

    if (result[TestEnum.ThreeOfAKind] != 0 && pair == true){
        result[TestEnum.FullHouse] = 25;
    }

    return result;
}