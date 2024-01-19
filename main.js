let computerCounter=0; let playerCounter=0;
let playerContainer=document.querySelector('.player-container');
let computerContainer=document.querySelector('.computer-container');
let computerResult=document.querySelector('.computer-results p');
let playerResult=document.querySelector('.player-results p');
let finalResult=document.querySelector('.final-results p')
const buttons = document.getElementsByTagName("button");
function getComputerChoice(){ //choosing a random choice from the list of options
    return Math.floor(Math.random()*3);
}

function checkRoundWinner(computerChoice,playerChoice){
    finalResult.textContent=''
    winner = (3 + playerChoice - computerChoice) % 3;
    if (winner===1){
        playerCounter++;
        playerResult.textContent=`Player: ${playerCounter}`;
        finalResult.textContent='Player wins this round!';
    }
    else if (winner===2){
        computerCounter++;
        computerResult.textContent=`Computer: ${computerCounter}`;
        finalResult.textContent='Computer wins this round!';
    }
    else{
        finalResult.textContent='It is a draw! Please play again.';
    }

}
    
function checkWinner(){
    if (playerCounter===5){
        finalResult.textContent='Player wins the game!';
        playerCounter=0;
        computerCounter=0;
        playerResult.textContent=`Player: ${playerCounter}`;
        computerResult.textContent=`Computer: ${computerCounter}`;
        playerContainer.style.backgroundImage="url(Images/usada_pekora.jpg)"
        computerContainer.style.backgroundImage="url(Images/karen.jpg)"
    }
    else if (computerCounter===5){
        finalResult.textContent='Computer wins the game!';
        playerCounter=0;
        computerCounter=0;
        playerResult.textContent=`Player: ${playerCounter}`;
        computerResult.textContent=`Computer: ${computerCounter}`;
        playerContainer.style.backgroundImage="url(Images/usada_pekora.jpg)"
        computerContainer.style.backgroundImage="url(Images/karen.jpg)"
    }

}    

const buttonPressed = (e) => {
    playerChoice=parseInt(e.target.id);
    computerChoice=getComputerChoice();
    playerContainer.style.backgroundImage=`url(Images/${playerChoice}.jpg)`
    computerContainer.style.backgroundImage=`url(Images/${computerChoice}.jpg)`
    checkRoundWinner(computerChoice,playerChoice);
    checkWinner();
}


  for (let button of buttons) {
    button.addEventListener("click", buttonPressed);
    
  }



