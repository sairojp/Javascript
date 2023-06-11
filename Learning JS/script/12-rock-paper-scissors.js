let score = {
  wins :0,
  lose :0,
  tie :0
};

updateScoreElement();

//main logic
function playGame(playerMove){
  const computerMove = pickComputerMove();
  let result ='';

  if(playerMove ==='Rock'){
    if(computerMove === 'Rock'){
      result = 'It is draw';
    }
    else if(computerMove ==='Paper'){
      result = 'You lose';
    }
    else{
      result = 'You win';
    }
  }

  else if(playerMove === 'Paper'){
    if(computerMove === 'Paper'){
      result = 'It is draw';
    }
    else if(computerMove === 'Scissors'){
      result = 'You lose';
    }
    else{
      result = 'You win';
    }
  }
  
  else {
    if(computerMove === 'Scissors'){
      result = 'It is draw';
    }
    else if(computerMove === 'Rock'){
      result = 'You lose';
    }
    else{
      result = 'You win';
    }
  }

  if(result === 'You win'){
    score.wins += 1;
  }

  else if(result ==='You lose'){
    score.lose += 1;
  }

  else {
    score.tie += 1;
  }

  //updates score
  updateScoreElement();

    //display the result in the paragraph
    document.querySelector('.result').innerHTML=`${result}`;

    //display the moves picked in the paragraph
    document.querySelector('.movePicked').
    innerHTML=`You <img src="Images/${playerMove}-emoji.png" class="move-icon"> 
    <img src="Images/${computerMove}-emoji.png"
    class="move-icon">
    Computer`;
  
};

  function pickComputerMove(){
    //picks one random move
    const randomNumber = Math.random();
    let computerMove = '';
    if(randomNumber >=0 && randomNumber <1/3 ){
      computerMove = 'Rock'
    }
    else if(randomNumber >=1/3 && randomNumber <2/3 ){
      computerMove = 'Paper'
    }
    else if(randomNumber >=2/3 && randomNumber <=1 ){
      computerMove = 'Scissors'
    }
    return computerMove;
  };
  
function updateScoreElement(){
  document.querySelector('.js-score')
  .innerHTML = `Wins:${score.wins} Lose:${score.lose} Draw:${score.tie}`;
}


  function resetScore(){          
    score.wins = 0;
    score.lose = 0;
    score.tie = 0;
    updateScoreElement();
    
    
    document.querySelector('.result').innerHTML=``;

    
    document.querySelector('.movePicked').
    innerHTML=``;
  };

  let isAutoPlaying = false;
  let intervalId;

  function autoPlay(){
    if(!isAutoPlaying){
      intervalId = setInterval(function(){
        const playerMove = pickComputerMove();
        playGame(playerMove);
      },1000);
      isAutoPlaying = true ;
    } else {
      clearInterval(intervalId);
      isAutoPlaying = false;
    }
    
    
  }