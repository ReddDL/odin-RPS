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
            return winStatement;s
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

function game(){
    for (i = 0; i < 5; i++){
        let playerSelection = prompt("Enter your choice (Rock, Paper, Scissors): ");
        const computerSelection = getComputerChoice();

        if (playerSelection == null){
            alert("Enter a valid choice");
            continue;
        }
        console.log(playRound(playerSelection, computerSelection));
    }
}


game();

