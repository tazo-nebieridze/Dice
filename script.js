var btnNew=document.querySelector(".btn-new");
var btnRoll=document.querySelector(".btn-roll");
var btnHold=document.querySelector(".btn-hold");
var finaleScore=document.querySelector(".final-score");
var dice=document.querySelector(".dice");

var score=[0,0],currentScore=0,activePlayer=0,gameStatus=true,activePlayerPanel=document.querySelector(".player-0-panel");

var next=function(){
    currentScore=0;
        activePlayerPanel.querySelector(".player-current-score").textContent=0;
        activePlayerPanel.classList.remove("active");
        activePlayer = activePlayer === 1 ? 0 : 1; 
        activePlayerPanel=document.querySelector(".player-"+activePlayer+"-panel");
        activePlayerPanel.classList.add("active");
        dice.style.display='none';
}

btnRoll.addEventListener('click',function(){
    if(finaleScore.value){
            dice.style.display='block';
            var randomNumber=Math.floor(Math.random()*6)+1;
            document.querySelector(".dice").src="img/dice-"+randomNumber+".png";
        if(randomNumber!=1){
            currentScore+=randomNumber;
            activePlayerPanel.querySelector('.player-current-score').textContent=currentScore;
        }
        else{
            next();
        }
    }
    else{
        finaleScore.focus();
        finaleScore.placeholder="please insert winner score";
    }
})
btnHold.addEventListener('click',function(){
    if(gameStatus){
        var endGameScore=finaleScore.value;
    
        score[activePlayer]+=currentScore;
        activePlayerPanel.querySelector(".player-score").textContent=score[activePlayer];
        if(score[activePlayer]>=endGameScore*1){
            activePlayerPanel.classList.remove("active");
            activePlayerPanel.classList.add("winner");
            activePlayerPanel.querySelector(".player-name").textContent="winner";
            dice.style.display='none';
            finaleScore.placeholder="winner score";
            finaleScore.value="";
            gameStatus=false;
        }
        else {
            next();
        }
    }

btnNew.addEventListener('click',function(){
    // score-[0,0];
    // activePlayer=0;
    // gameStatus=true;
    // activePlayerPanel=document.querySelector(".player-0-panel");
    // dice.style.display="none";
    window.location.reload();
})
    

})



