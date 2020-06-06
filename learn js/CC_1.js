var mark = {
    name : 'mark',
    mass : 2,
    height : 3
}

var john = {
    name : 'john',
    mass : 1,
    height : 4
}

//per = person. For comparing total bmi
function compareBMI (per1, per2) {
 bmi1 = per1.mass * Math.pow(per1.height, 2);
 bmi2 = per2.mass * Math.pow(per2.height, 2);

    console.log (bmi1 + ' ' + bmi2);
    if (bmi1 ===  bmi2){
        return console.log('their bmi are the same at: ' + bmi1 );
    } else if  (bmi1 > bmi2){ 
        return console.log(per1.name + '\'s bmi is higher at: ' + bmi1);
    }
    return console.log(per2.name + '\'s bmi is higher at: ' + bmi2);
}

compareBMI(mark, john);
