/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
//var x = document.querySelector('#score-0').textContent;

//default var
var DEFAULT_WIN

DEFAULT_WIN = 50;

var game, scores, roundScore, activePlayer;
//new vars
var sixCounter, winCondition;
init();


document.querySelector('.btn-roll').addEventListener('click', function() {
    if(game){
        //random number
        var dice = Math.floor(Math.random() * 6) + 1;
        var die = Math.floor(Math.random() * 6) + 1;
        
        //number display
        var diceDOM = document.querySelector('.dice');
        var dieDOM = document.querySelector('.die');
        diceDOM.style.display = 'block';
        dieDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
        dieDOM.src = 'dice-' + die + '.png';
        
        //update if dice number does not equal 1
        if(dice > 1 && die > 1) {
            //add score
            roundScore += dice + die;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
            if(dice === 6 || die === 6) {
                sixCounter ++;
                if(sixCounter === 2){
                    scores[activePlayer] = 0;
                    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
                    nextPlayer();
                }
            } else {
                sixCounter = 0;
            }
        } else {
            nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function () {
    if(game){
        // add current score to active player global score
        scores[activePlayer] += roundScore;
        //update ui
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];    
    }   
    //check if player is at 50 points
    if(scores[activePlayer] >= winCondition){     
        document.querySelector('#name-' + activePlayer).textContent = 'Winner';  
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.die').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        game = false;
    } else {
        //next player
        nextPlayer()
    }
})

document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer() {
    //next player
    document.getElementById('current-' + activePlayer).textContent = '0';
    //changes current player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.die').style.display = 'none';

    sixCounter = 0;
}

function init () {
    game = true;
    scores = [0,0];
    roundScore = 0;
    //0 is player 1, 1 is player 2
    activePlayer = 0;
    sixCounter = 0;

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.die').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.add('active');
    winCondition = prompt('please enter a win condition', 'the default is 50')

    if(isNaN(winCondition)){
        winCondition = DEFAULT_WIN;
    }
}