var john = {
    name : 'John',
    age : 26,
    job : 'teacher',

    presentation : function(style, timeOfDay){
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ' ladies and gentlemen, my name is ' + this.name + ' and I work as a ' + this.job);
        }
        if (style === 'casual') {
            console.log('Hey, I\'m ' + this.name + ' and I\'m a ' + this.job)
        }
    }
}

var emily = {
    name : 'Emily',
    age : 35,
    job : 'designer'
}

john.presentation('formal', 'morning');
john.presentation.call(emily, 'casual', 'afternoon')

//will not work. Only used when when inputting arrays
//john.presentation.apply(emily, ['casual', 'afternoon'])

//bind returns a copy of the function to be stored somewhere else
var johnCasual = john.presentation.bind(john, 'casual');

johnCasual('evening');


var years = [1999, 2000, 2001, 2002, 2003];

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

function isFullAge(limit, elem){
    return elem >= limit;
}

function maxHeartRate(elem) {
    if(elem >= 18 && elem <= 80){
        return Math.round(206.9 - (0.67 * elem));
    }
    return -1;
}

var ages = arrayCalculate(years, ageCalculate);
var fullJapan = arrayCalculate(ages, 
    isFullAge.bind(this.ages, 20));
console.log(ages);
console.log(fullJapan);