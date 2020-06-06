var john = {
    name : 'John',
    avgScore : [89, 120, 103]
}

var mike = {
    name : 'Mike',
    avgScore : [116, 94, 123]
}

var mary = {
    name : 'Mary',
    avgScore : [97, 134, 105]
}

function AVGScore (per) {
    var total = 0;
    for (var i = 0; i < per.avgScore.length; i++){
        total += per.avgScore[i];
    }
    return total/per.avgScore.length;
}

function highestAVG (per1, per2){
    var highVal = Math.max(AVGScore(per1), AVGScore(per2));
    per = [per1, per2];
    for (var i = 0; i < 2; i++){
        if(AVGScore(per[i]) === highVal){
            return per[i].name + '\'s team has the highest average score at: ' + highVal;
        }
    }
    return 'their teams scored an equal average at: ' + highVal;
}

function highestAVG (per1, per2, per3){
    var highVal = Math.max(AVGScore(per1), AVGScore(per2), AVGScore(per3));
    per = [per1, per2, per3];
    for (var i = 0; i < 3; i++){
        if(AVGScore(per[i]) === highVal){
            return per[i].name + '\'s team has the highest average score at: ' + highVal;
        }
    }
    return 'their teams scored an equal average at: ' + highVal;
}