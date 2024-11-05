console.log("Hello");
console.log(getComputerChoice());



// Randomly choose either rock, paper, or scissors
// Ask the user for input (rock, paper, or scissors)
// Check which answer the user picks and which the computer picks (Rock > Scissors, Paper > Rock, Scissors > Paper)
// Print whether the player won or lost

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