var years = [1999, 2000, 2001, 2002, 2003];

//code

console.log (years);    
console.log ( arrayCalculate(years, ageCalculate));

var test = arrayCalculate(years, ageCalculate);
console.log(arrayCalculate(test, maxHeartRate));

//console.log ( arrayCalculate(arrayCalculate(years, ageCalculate)), 
//                maxHeartRate);

//func

function arrayCalculate(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]))
    }
    return arrRes;
}

//callback func

function ageCalculate (elem) {
    return 2020 - elem;
}

function maxHeartRate(elem) {
    if(elem >= 18 && elem <= 80){
        return Math.round(206.9 - (0.67 * elem));
    }
    return -1;
}