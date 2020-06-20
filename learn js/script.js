function game() {
    var score = Math.random() * 10;
    console.log(score > 10);
}

game();

//used primarily for data privacy
(function() {
    var score = Math.random() * 10;
    console.log(score > 10);
})();