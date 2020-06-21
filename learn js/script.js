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