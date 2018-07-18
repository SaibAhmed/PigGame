var scores, roundScore, activePlayer, dice , gamePlaying;
var lastDice;
var winningScore;
var input;
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
    if(dice === 6 && lastDice === 6){
        scores[activePlayer]= 0;
        document.querySelector('#score-'+ activePlayer).textContent = '0';
        nextPlayer();
    }    
    if(dice !==1){
        roundScore += dice;
        document.querySelector('#current-'+ activePlayer).textContent = roundScore;
    }else{
        nextPlayer();
    }
        lastDice = dice;
    }
    
});

document.querySelector('.btn-hold').addEventListener('click',function(){
   if(gamePlaying){
       scores[activePlayer] += roundScore;
       document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        input = document.querySelector('.final-score').value;
       
       if(input){
            winningScore = input;
       }else{
           winningScore = 100;
       }
       
       if(scores[activePlayer] >= winningScore){
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

//NextPlayer function
function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        document.getElementById('current-0').textContent = '0';    
        document.getElementById('current-1').textContent = '0';    
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        document.querySelector('.dice').style.display ='none';
}


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
document.querySelector('.btn-new').addEventListener('click',init);





//console.log(dice);
//document.querySelector('#current-' + activePlayer).textContent = dice;

//another way
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';