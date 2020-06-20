//retirement age in europe is 65
//retirement age in the US is 66
var CURRENT_YEAR = 2020;

var a = ' this is a test';

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementUS(1980);
retirementGermany(1980);
retirementIceland(1980);
retirement(65)(1960);

function retirement(retirementAge) {
    var a = ' years left until retirement.';

    return function(yearOfBirth) {
        var age = CURRENT_YEAR - yearOfBirth;
        console.log((retirementAge - age) + a)
    }
}