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
    const computerChoice = document.getElementById("computer-choice")
    if(computerSelection == "WATER"){
        computerChoice.innerHTML='<svg class="choice-icon"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M192 512C86 512 0 426 0 320C0 228.8 130.2 57.7 166.6 11.7C172.6 4.2 181.5 0 191.1 0h1.8c9.6 0 18.5 4.2 24.5 11.7C253.8 57.7 384 228.8 384 320c0 106-86 192-192 192zM96 336c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 61.9 50.1 112 112 112c8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 0-80-35.8-80-80z"/></svg>';
        computerChoice.classList.add('blue-color');
    } else if(computerSelection == "FIRE"){
        computerChoice.innerHTML='<svg class="choice-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8 69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z"/></svg>';
        computerChoice.classList.add("red-color");
    } else if (computerSelection == "GRASS"){
        computerChoice.innerHTML = '<svg class="choice-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M272 96c-78.6 0-145.1 51.5-167.7 122.5c33.6-17 71.5-26.5 111.7-26.5h88c8.8 0 16 7.2 16 16s-7.2 16-16 16H288 216s0 0 0 0c-16.6 0-32.7 1.9-48.3 5.4c-25.9 5.9-49.9 16.4-71.4 30.7c0 0 0 0 0 0C38.3 298.8 0 364.9 0 440v16c0 13.3 10.7 24 24 24s24-10.7 24-24V440c0-48.7 20.7-92.5 53.8-123.2C121.6 392.3 190.3 448 272 448l1 0c132.1-.7 239-130.9 239-291.4c0-42.6-7.5-83.1-21.1-119.6c-2.6-6.9-12.7-6.6-16.2-.1C455.9 72.1 418.7 96 376 96L272 96z"/></svg>';
        computerChoice.classList.add("green-color");
    }
    console.log(playRound(playerSelection, computerSelection));
}

const waterBtn = document.getElementById("waterBtn");
const fireBtn = document.getElementById("fireBtn");
const grassBtn = document.getElementById("grassBtn");
let computerChoice = document.getElementById("computer-choice")
let playerSelection;

waterBtn.addEventListener('click', () => game("WATER"));
fireBtn.addEventListener('click', () => game("FIRE"));
grassBtn.addEventListener('click', () => game("GRASS"));





