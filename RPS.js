function getComputerChoice(){
    let choices = ["ROCK", "PAPER", "SCISSORS"];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection){

    playerSelection = playerSelection.toUpperCase();
    
    const winStatement = "You won! " + playerSelection + " beats " + computerSelection;
    const loseStatement = "You lost! " + computerSelection + " beats " + playerSelection;
    const tieStatement = "It's a tie! You both selected " + playerSelection

    if (playerSelection == computerSelection){
        return tieStatement;
    } else if (playerSelection == "ROCK"){
        if (computerSelection == "SCISSORS"){
            return winStatement;
        } else if (computerSelection == "PAPER"){
            return loseStatement;
        }
    } else if (playerSelection == "SCISSORS"){
        if (computerSelection == "PAPER"){
            return winStatement;
        } else if (computerSelection == "ROCK"){
            return loseStatement;
        }
    } else if (playerSelection == "PAPER"){
        if (computerSelection == "ROCK"){
            return winStatement;
        } else if (computerSelection == "SCISSORS"){
            return loseStatement;
        }
    }
}

function game(playerSelection){
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
}

const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");
let playerSelection;

rockBtn.addEventListener('click', () => game("ROCK"));
paperBtn.addEventListener('click', () => game("PAPER"));
scissorsBtn.addEventListener('click', () => game("SCISSORS"));




