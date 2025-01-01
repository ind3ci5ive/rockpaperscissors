




// Game starts when user presses button
// Prompt user in a div to press a RPS button, do not continue until button is pressed
// Check the value of the button pressed commpared to the computer's and decide winner
// Print new text to screen displaying current score, and prompting to press a RPS button again
// Continue until either user or computer reaches 5 wins


const startButton = document.querySelector("#start-button");
const rockButton = document.querySelector("#rock-button");
const paperButton = document.querySelector("#paper-button");
const scissorsButton = document.querySelector("#scissors-button");
const displayWindow = document.querySelector("#display-window");

startButton.addEventListener("click", playGame);
rockButton.addEventListener("click", getHumanChoiceRock);
paperButton.addEventListener("click", getHumanChoicePaper);
scissorsButton.addEventListener("click", getHumanChoiceScissors);





playGame();


// itemButton.addEventListener("click", () => {

//     ul.removeChild(li);
// });

function getHumanChoiceRock() {

    humanSelection = "Rock";
}

function getHumanChoicePaper() {

    humanSelection = "Paper";
}

function getHumanChoiceScissors() {

    humanSelection = "Scissors";
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


function getHumanChoice() {

 
    do {


        displayWindow.innerHTML = "Please choose Rock, Paper, or Scissors"
        buttonPressed = 0;

        
        if (document.getElementById("rock-button").onclick = true) {

            break;
        }

        else if (document.getElementById("paper-button").onclick = true) {

            break;
        }

        else if (document.getElementById("scissors-button").onclick = true) {

            break;
        }

        // if (userInput.toLowerCase() == "rock") {

        //     return "Rock"; 
        // }

        // else if (userInput.toLowerCase() == "paper") {

        //     return "Paper";
        // }

        // else if (userInput.toLowerCase() == "scissors") {

        //     return "Scissors";
        // }

        // else {

        //     console.log("Please provide proper input: Rock, Paper, or Scissors");
        // }

    }
    while(true);

}


function playRound(computerSelection, humanSelection) {

    if(computerSelection == "Rock" && humanSelection == "Rock"){

        console.log("It's a tie! No points awarded!");
    }

    else if(computerSelection == "Rock" && humanSelection == "Paper"){

        console.log("You win! Paper beats Rock.");
        return 1;
    }

    else if(computerSelection == "Rock" && humanSelection == "Scissors"){

        console.log("You lose! Rock beats Scissors.");
        return 0;
    }

    else if(computerSelection == "Paper" && humanSelection == "Rock"){

        console.log("You lose! Paper beats Rock.");
        return 0;
    }

    else if(computerSelection == "Paper" && humanSelection == "Paper"){

        console.log("It's a tie! No points awarded!");
    }

    else if(computerSelection == "Paper" && humanSelection == "Scissors"){

        console.log("You Win! Scissors beats Paper.");
        return 1;
    }

    else if(computerSelection == "Scissors" && humanSelection == "Rock"){

        console.log("You win! Rock beats Scissors.");
        return 1;
    }

    else if(computerSelection == "Scissors" && humanSelection == "Paper"){

        console.log("You lose! Scissors beats Paper");
        return 0;
    }

    else if(computerSelection == "Scissors" && humanSelection == "Scissors"){

        console.log("It's a tie! No points awarded!");
    }

}


function playGame() {

    let humanScore = 0;
    let computerScore = 0;
    let computerSelection;
    let humanSelection;

    do {

    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice();
    console.log("Computer chose: " + computerSelection);
    console.log("You chose: " + humanSelection);
    result = playRound(computerSelection, humanSelection)

    if (result == 1) {

        humanScore++;
    }

    else if (result == 0){

        computerScore++;
    }

    } while (humanScore < 5 && computerScore < 5);


    console.log("Final Scores\n You: " + humanScore + " Computer: " + computerScore);
}





