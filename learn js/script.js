var teacherQuestion =
interviewQuestion('teacher');
var designerQuestion = 
interviewQuestion('designer');
var testQuestion =
interviewQuestion('none');

teacherQuestion('john');
designerQuestion('Mary');
testQuestion('Gary', 'test');

teacherQuestion('test', 'john');

function interviewQuestion(job) {
    if (job === 'designer') {
        return function (name) {
           console.log (name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher'){
        return function(name) {
            console.log(name + ", what subject do you teach?");
        }
     } else {
         return function(name, test) {
             console.log ('Hello, ' + name + ', what do you do' + test);
         }
     }
}