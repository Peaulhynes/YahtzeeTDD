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
    LargeStraight:10,
    Chance:11,
    Yahtzee:12
});

exports.Count = function Count(des) {

    var total = 0;
    var count = [0, 0, 0, 0, 0, 0];
    var result = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var pair = false;
    var following = 0;
    var smallstraight = false;
    var largestraight = false;

    for (var i = 0; i < des.length; i++) {
        result[des[i] - 1] += des[i];
        count[des[i] - 1] += 1;
        total += des[i];
    }

    for (var i = 0; i < count.length; i++) {
        if (count[i] > 0) {
            following ++;
            if (following == 4)
                smallstraight = true;
            if (following == 5)
                largestraight = true;

        }else 
            following = 1;

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
        case 5:
            result[TestEnum.Yahtzee] = 50;
        }
    }

    if (result[TestEnum.ThreeOfAKind] != 0 && pair == true)
        result[TestEnum.FullHouse] = 25;
    

    if (smallstraight)
        result[TestEnum.SmallStraight] = 30;
    if (largestraight)
        result[TestEnum.LargeStraight] = 40;
    
    result[TestEnum.Chance] = total;
    
    return result;
}