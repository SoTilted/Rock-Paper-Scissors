let options=["rock","paper","scissors"]; //computer options

function getComputerChoice(){ //choosing a random choice from the list of options
    return options[Math.floor(Math.random()*3)];
}
console.log(getComputerChoice())

function getPlayerChoice(){ //asking player for to choose an option and checking if he put a viable one.
    let playerchoice = prompt("Choose between rock, paper and scissors.").toLowerCase();
    while(playerchoice!=options[0] && playerchoice!=options[1] && playerchoice!=options[2]){
        console.log("Wrong input, please choose between the given options.");
        playerchoice = prompt("Choose between rock, paper and scissors.").toLowerCase();
    }
    return playerchoice;
}

function playRound(computerSelection,playerSelection){ //it checks with multiple ifs who won.
    if (playerSelection==computerSelection){// if its a draw, it calls itself to play again.
        console.log('Draw! Play again!');
        return playRound(getComputerChoice(),getPlayerChoice());
    }
    else{
        if (playerSelection=="rock" && computerSelection=="scissors") {
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`) 
            return 'player'; 
        }
        else if (playerSelection=="rock" && computerSelection=="paper") {
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
            return 'computer'; 
        }
        else if (playerSelection=="paper" && computerSelection=="rock") {
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`) 
            return 'player'; 
        }
        else if (playerSelection=="papper" && computerSelection=="scissors") {
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
            return 'computer'; 
        }
        else if (playerSelection=="scissors" && computerSelection=="paper") {
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`) 
            return 'player';
        }
        else if (playerSelection=="scissors" && computerSelection=="rock") {
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
            return 'computer';
        }
    }
}

function game(){// counts points and the one with 3 games wins
    let playercounter=0;
    let computercounter=0;
    let currwinner='';
    while (playercounter!=3 && computercounter!=3){
        currwinner=playRound(getComputerChoice(),getPlayerChoice());
        if (currwinner == "player"){
            playercounter++;
        }
        else if(currwinner=="computer"){
            computercounter++;
        }
    }
    let winner=(playercounter>computercounter) ? "Player Won!":"Computer Won!";
    return winner; 
}

console.log(game())