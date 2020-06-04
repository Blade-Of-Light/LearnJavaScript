var person  = {
    name : 'person',
    language : 'english',
    teach : function(language){
        return this.language = language;
    }
}

console.log(person.language);

console.log(person.teach('sign language'));

var animal = {
    language : 'n/a'
}

console.log(animal.language);

console.log(person.teach.call(animal, 'animal sign langauge'));