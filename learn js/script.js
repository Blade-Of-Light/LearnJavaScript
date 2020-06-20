//primitives vs objects

//primitives
var a = 23;
var b = a;
a = 46;

//both a is 46, b is 23
//primitives store data

//objects
var obj1 = {
    name : 'a',
    age : 1
}

var obj2 = obj1;

obj1.age = 3;

//obj1 and obj2 have an age of 3
//objects point to the specific location in memory rather than make new data

console.log(obj1.age + ' is ob1\'s age');
console.log(obj2.age + ' is obj2\s age');

var age = 19;
var obj = {
    name: 'Alen',
    city: 'Burnaby'
}

function change (a, b){
    a = 20;
    b.city = 'San Francisco';
}

change(age, obj);

//age property is added, and city in memory location is changed.