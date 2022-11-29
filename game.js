
// El ordenador genera aleatoriamente una opcion, piedra, papel o tijera

// Rock = 0
// Paper = 1
// Scissors = 2

const choices = ["Rock","Paper", "Scissors"];

startGame();

function startGame(){
    computerSelection = getComputerChoice();
    playerSelection =getPlayerChoice();
    playRound(playerSelection, computerSelection);
    
}

function getComputerChoice() {
    //code 
    let computerNumber = Math.floor(Math.random() * 3);
    computerSelection = choices[computerNumber].toUpperCase();
    console.log(computerSelection);
    return computerSelection;
    

}

//Eleccion jugador
function getPlayerChoice(){
    playerSelection = prompt("Choose Rock, Paper, Scissors").toUpperCase();
    console.log(playerSelection);
    return playerSelection;


}

// Juega una ronda 
function playRound(playerSelection, computerSelection) {
    // code
    let result;
    if (playerSelection == computerSelection){
        result = "Draw"
    }else if(playerSelection == "SCISSORS" && computerSelection == "PAPER"){
        result = "You win"
    }else if(playerSelection == "ROCK" && computerSelection == "SCISSORS"){
        result = "You win"
    }else if(playerSelection == "PAPER" && computerSelection == "ROCK"){
        result = "You win"
    }else{
        result = "You loose"
    }


        console.log(result)
    return result;

}


