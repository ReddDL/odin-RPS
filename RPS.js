function getComputerChoice(){
    let choices = ["WATER", "FIRE", "GRASS"];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection){

    playerSelection = playerSelection.toUpperCase();
    
    const winStatement = "You won! " + playerSelection + " beats " + computerSelection;
    const loseStatement = "You lost! " + computerSelection + " beats " + playerSelection;
    const tieStatement = "It's a tie! You both selected " + playerSelection

    if (playerSelection == computerSelection){
        return tieStatement;
    } else if (playerSelection == "WATER"){
        if (computerSelection == "FIRE"){
            return winStatement;
        } else if (computerSelection == "GRASS"){
            return loseStatement;
        }
    } else if (playerSelection == "FIRE"){
        if (computerSelection == "GRASS"){
            return winStatement;
        } else if (computerSelection == "WATER"){
            return loseStatement;
        }
    } else if (playerSelection == "GRASS"){
        if (computerSelection == "WATER"){
            return winStatement;
        } else if (computerSelection == "FIRE"){
            return loseStatement;
        }
    }
}

function game(playerSelection){
    var computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
}

const waterBtn = document.getElementById("waterBtn");
const fireBtn = document.getElementById("fireBtn");
const grassBtn = document.getElementById("grassBtn");
let playerSelection;

waterBtn.addEventListener('click', () => game("WATER"));
fireBtn.addEventListener('click', () => game("FIRE"));
grassBtn.addEventListener('click', () => game("GRASS"));




