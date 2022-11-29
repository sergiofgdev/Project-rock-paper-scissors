
// El ordenador genera aleatoriamente una opcion, piedra, papel o tijera

// Rock = 0
// Paper = 1
// Scissors = 2

const choices = ["Rock","Paper", "Scissors"]

function getComputerChoice() {
    //code 
    let computerNumber = Math.floor(Math.random() * 3)
    console.log(choices[computerNumber])

}

// Juega una ronda 
function playRound(playerSelection, computerSelection) {
    // code

}

getComputerChoice()
