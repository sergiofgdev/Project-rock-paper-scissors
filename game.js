
// El ordenador genera aleatoriamente una opcion, piedra, papel o tijera

// Rock = 0
// Paper = 1
// Scissors = 2

const choices = ["Rock", "Paper", "Scissors"];

game();

function game() {
    //bucle 5 veces y guardamos resultados
    let playerScore = 0;
    let computerScore = 0;
    let result;
    for (let i = 0; i < 5; i++) {
        let result = play();
        if (result=="You win"){
            playerScore += 1;
        }else if(result=="You loose"){
            computerScore +=1;
        }
        // console.clear();
    }
    if (playerScore > computerScore){
        result = "YOU HAVE WON"
    }else{
        result = "YOU HAVE LOOSE"
    }

    // result = playerScore > computerScore ? "YOU HAVE WON": "YOU HAVE LOOSE";
    console.log(result + `\n Your score is ${playerScore}`)
}

function play() {
    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoice();
    let result = playRound(playerSelection, computerSelection);
    return result;
}

function getComputerChoice() {
    //code 
    let computerNumber = Math.floor(Math.random() * 3);
    computerSelection = choices[computerNumber].toUpperCase();
    console.log(computerSelection);
    return computerSelection;
}

//Eleccion jugador
function getPlayerChoice() {
    playerSelection = prompt("Choose Rock, Paper, Scissors").toUpperCase();
    console.log(playerSelection);
    return playerSelection;
}

// Juega una ronda 
function playRound(playerSelection, computerSelection) {
    // code
    let result;
    if (playerSelection == computerSelection) {
        result = "Draw"
    } else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
        result = "You win"
    } else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
        result = "You win"
    } else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
        result = "You win"
    } else {
        result = "You loose"
    }

    console.log(result)
    console.log("-----------")
    return result;
}


