var scores, roundScore, activePlayer, dice , gamePlaying;

init();

document.querySelector('.btn-roll').addEventListener('click' , function(){
    
    if(gamePlaying){
        // 1. random number
    var dice = Math.floor(Math.random() * 6) + 1;
    
    // 2. display the result
    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png';
    
    // 3. update the round score if the rolled number was NOT 1
    if(dice !== 1){
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }else{
       nextPlayer();
    }
    }
    
});

    document.querySelector('.btn-hold').addEventListener('click',function(){
        
        if(gamePlaying){
             //Add current score to global score
        scores[activePlayer] += roundScore; 
        
        //update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        
        //check if player win the game
        if(scores[activePlayer] >= 30){
            document.querySelector('#name-' + activePlayer).textContent = "Winner!";
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        }else{
            //next player turns
            nextPlayer();
        }
        }
    });

//next player
function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        document.getElementById('current-0').textContent = '0';    
        document.getElementById('current-1').textContent = '0';    
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        document.querySelector('.dice').style.display ='none';
}
document.querySelector('.btn-new').addEventListener('click',init);

function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = "Player-1";
    document.getElementById('name-1').textContent = "Player-2"; 
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}





//console.log(dice);
//document.querySelector('#current-' + activePlayer).textContent = dice;

//another way
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';