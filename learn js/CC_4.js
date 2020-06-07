var john = {
    name : 'John',
    mass : 92,
    height : 192,
    calcBMI : function () {
        this.bmi =  this.mass / (Math.pow(this.height, 2))
        return this.bmi
    }
}

var mark = {
    name : 'Mark',
    mass : 73,
    height : 173,
    calcBMI : function () {
        this.bmi =  this.mass / (Math.pow(this.height, 2))
        return this.bmi
    }
}

john.calcBMI();
mark.calcBMI();

console.log(john, mark)

console.log(Math.max(john.bmi, mark.bmi))