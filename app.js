(function () {

    //function

    function Question (desc, option, answer){
        this.desc = desc;
        this.option = option;
        this.answer = answer;
    }
    
    Question.prototype.displayQuestion = function() {
        console.log(this.desc);

        for (var i = 0; i < this.option.length; i++) {
            console.log(i + ' : ' + this.option[i]);
        }
    }
    
    Question.prototype.checkAns = function(answer, callback) {
        var score;

        if (answer === this.answer){
            console.log('correct');
            score = callback(true);

        } else {
            console.log('incorrect');
            score = callback(false);
        }

        this.displayScore(score);
    }

    Question.prototype.displayScore = function (score) {
        console.log('our current score is: ' + score + '\n' 
        + '--------------------------')
    }

    function nextQuestion () {
    
        var index = Math.floor(Math.random() * qList.length);

        qList[index].displayQuestion();     
        
        var answer = prompt('please select the correct answer');
        
        if (answer !== 'exit') {
            
            qList[index].checkAns(parseInt(answer), 
                keepScore);
            
            nextQuestion();

        }
    }

    function score() {
        var score = 0;
        return function(correct) {
            if(correct) {
                score++;
            }
            return score;
        }
    }
    
    var keepScore = score();

    //vars

    var q1 = new Question ('question 1, first answer is correct', ['first answer', 'second answer'], 0);
    
    var q2 = new Question ('question 2 third answer is correct', ['first answer', 'second answer', 'third answer'], 2);
    
    var q3 = new Question ('question 3 answer 3 is correct', ['answer 1', 'answer 2', 'answer 3', 'answer 4'], 2);

    var qList = [q1, q2, q3];
    
    //code

    nextQuestion();

})();
