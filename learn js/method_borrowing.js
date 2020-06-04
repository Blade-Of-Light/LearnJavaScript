var person = {
    language : 'English',
    sign : function() {
        this.language = 'sign language';
        return this.language;
    }
}

var monkey = {
    language : person.sign(),
}

console.log(monkey.language);
console.log(typeof(person.sign()));