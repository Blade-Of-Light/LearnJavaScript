/*
--- Let's build a fun quiz game in the console! ---
1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)
2. Create a couple of questions using the constructor
3. Store them all inside an array
4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).
5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.
6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).
7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

/*
--- Expert level ---
8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)
9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.
10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).
11. Display the score in the console. Use yet another method for this.
*/

//var
(function() {
var questionColle;

questionColle = [];

var score;

//objects
var Question = function (desc, options, answer) {
    this.desc = desc;
    this.options = options;
    this.answer = answer;
}

//code
score = 0;

q_0 = new Question('what is 1 + 1', ['2', '11', '1'], 0);
q_1 = new Question('what is 44 / 2', ['2', '22'], 1);

questionColle.push(q_0, q_1);

askQuestion();


//functions

function askQuestion () {
    var question = randomQuestion(questionColle);
    var answer = prompt(question.desc + '\n' + question.options + '\n' + 'your score is: ' + score, 'type 0 - ' + (question.options.length - 1));

    if(answer == 'exit'){
        return;
    }

    if(isNaN(answer) || answer > (question.options.length - 1) || answer < 0){
        return alert('you did not enter a valid answer.');
    }

    console.log(question.answer);

    if(answer == question.answer){
        addScore();
        alert('correct!');
        return askQuestion();
    } else {
        alert('incorrect');
    
        return askQuestion();
    }
    return;

    function addScore() {
        score++;
    }
}

function randomQuestion (arr){
    var index = Math.round(Math.random(arr.length));
    console.log(index);

    return arr[index];  
}


})()
