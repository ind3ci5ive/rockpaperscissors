
// const computerSelection = getComputerChoice();
// const humanSelection = getHumanChoice();
// let humanScore = 0;
// let computerScore = 0;




//#region debug
console.log("Hello");
console.log(getComputerChoice());
console.log(getHumanChoice());
//#endregion











// Randomly choose either rock, paper, or scissors
// Ask the user for input (rock, paper, or scissors)
// Check which answer the user picks and which the computer picks (Rock > Scissors, Paper > Rock, Scissors > Paper)
// Print whether the player won or lost

//#region getComputerChoice
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
//#endregion

//#region getHumanChoice

function getHumanChoice() {


    do {


        let userInput = prompt("Please choose Rock, Paper, or Scissors.");

        if (userInput.toLowerCase() == "rock") {

            return "Rock"; 
        }

        else if (userInput.toLowerCase() == "paper") {

            return "Paper";
        }

        else if (userInput.toLowerCase() == "scissors") {

            return "Scissors";
        }

        else {

            console.log("Please provide proper input: Rock, Paper, or Scissors");
        }

    }
    while(true);

}
//#endregion

//#region playRound
function playRound(computerSelection, humanSelection) {

    if(computerSelection == "Rock" && humanSelection == "Rock"){

        console.log("It's a tie! No points awarded!");
    }

    else if(computerSelection == "Rock" && humanSelection == "Paper"){

        console.log("You win! Paper beats Rock.");
    }

    else if(computerSelection == "Rock" && humanSelection == "Scissors"){

        console.log("You lose! Rock beats Scissors.");
    }

    else if(computerSelection == "Paper" && humanSelection == "Rock"){

        console.log("You lose! Paper beats Rock.");
    }

    else if(computerSelection == "Paper" && humanSelection == "Paper"){

        console.log("It's a tie! No points awarded!");
    }

    else if(computerSelection == "Paper" && humanSelection == "Scissors"){

        console.log("You Win! Scissors beats Paper.");
    }

    else if(computerSelection == "Scissors" && humanSelection == "Rock"){

        console.log("You win! Rock beats Scissors.");
    }

    else if(computerSelection == "Scissors" && humanSelection == "Paper"){

        console.log("You lose! Scissors beats Paper");
    }

    else if(computerSelection == "Scissors" && humanSelection == "Scissors"){

        console.log("It's a tie! No points awarded!");
    }

}
//#endregion
