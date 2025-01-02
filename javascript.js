




// Game starts when user presses button
// Prompt user in a div to press a RPS button, do not continue until button is pressed
// Check the value of the button pressed commpared to the computer's and decide winner
// Print new text to screen displaying current score, and prompting to press a RPS button again
// Continue until either user or computer reaches 5 wins



let totalHumanScore = 0;
let totalComputerScore = 0;
const rockButton = document.querySelector("#rock-button");
const paperButton = document.querySelector("#paper-button");
const scissorsButton = document.querySelector("#scissors-button");
const displayWindow = document.querySelector("#display-window");
const playerScoreDisplay = document.querySelector("#player-score");
const computerScoreDisplay = document.querySelector("#computer-score");

// rockButton.addEventListener("click", playGame(0));
// paperButton.addEventListener("click", playGame(1));
// scissorsButton.addEventListener("click", playGame(2));





function playGame(playerChoice) {


    if (totalComputerScore < 5 && totalHumanScore < 5) {

        let humanScore = 0;
        let computerScore = 0;
        let computerSelection;
        let humanSelection;

        computerSelection = getComputerChoice();
        humanSelection = getHumanChoice(playerChoice);
        console.log("Computer chose: " + computerSelection);
        console.log("You chose: " + humanSelection);
        result = playRound(computerSelection, humanSelection)

        if (result == 1) {

            totalHumanScore++;
        }

        else if (result == 0){

            totalComputerScore++;
        }

        playerScoreDisplay.textContent = "Human Score: " + totalHumanScore;

        computerScoreDisplay.textContent = "Computer Score: " + totalComputerScore;

    }


    else {

        displayWindow.textContent = "Game is over! Please reload page to play again!";
    }
}



function getComputerChoice() {

    let computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice == 0) {

        return "Rock";
    }

    else if (computerChoice == 1) {

        return "Paper";
    }

    else {

        return "Scissors";
    }
}


function getHumanChoice(rpsChoice) {
    
        displayWindow.textContent = "Please choose Rock, Paper, or Scissors"
        

        if (rpsChoice == 0) {

            return "Rock"; 
        }

        else if (rpsChoice == 1) {

            return "Paper";
        }

        else if (rpsChoice == 2) {

            return "Scissors";
        }

}


function playRound(computerSelection, humanSelection) {

    if(computerSelection == "Rock" && humanSelection == "Rock"){

        displayWindow.textContent = "It's a tie! No points awarded!";
    }

    else if(computerSelection == "Rock" && humanSelection == "Paper"){

        displayWindow.textContent = "You win! Paper beats Rock!";
        return 1;
    }

    else if(computerSelection == "Rock" && humanSelection == "Scissors"){

        displayWindow.textContent = "You lose! Rock beats Scissors!";
        return 0;
    }

    else if(computerSelection == "Paper" && humanSelection == "Rock"){

        displayWindow.textContent = "You lose! Paper beats Rock!";
        return 0;
    }

    else if(computerSelection == "Paper" && humanSelection == "Paper"){

        displayWindow.textContent = "It's a tie! No points awarded!";
    }

    else if(computerSelection == "Paper" && humanSelection == "Scissors"){

        displayWindow.textContent = "You win! Scissors beats Paper!";
        return 1;
    }

    else if(computerSelection == "Scissors" && humanSelection == "Rock"){

        displayWindow.textContent = "You win! Rock beats Scissors!";
        return 1;
    }

    else if(computerSelection == "Scissors" && humanSelection == "Paper"){

        displayWindow.textContent = "You lose! Scissors beats Paper!";
        return 0;
    }

    else if(computerSelection == "Scissors" && humanSelection == "Scissors"){

        displayWindow.textContent = "It's a tie! No points awarded!";
    }

}







