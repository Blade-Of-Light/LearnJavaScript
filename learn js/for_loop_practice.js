/**
 * for loops, made using a initilizer, conditional statement, and coounter/incrementor to loop code a defined number of times.
 */

/*
 //code inside loops 5 times
 for (var i = 0; i < 5; i++){
    //using 'i' as a variable inside ethe for loop will use and effect the comparetor
    i += 1;
    // i = i + 1. This means the code will run 3 times because i is also incremented at the start of the for loop
 }
*/

/*
 //prints numbers 1 - 10
 for (var i = 0; i < 10; i ++){
     console.log(i + 1);
     //because i is a int, js does not cast it as a string.
 }
*/

 var param = 2;
 for (;;) {
    if(param <= 10){ 
        console.log(param);
        param += 2;
        continue;
    }
        break;
 }