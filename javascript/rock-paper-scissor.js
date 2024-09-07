let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    let rand = Math.floor(Math.random()*3) + 1;
    if (rand == 1) {
        console.log("rock");
        return "rock";
    }
    else if (rand == 2) {
        console.log("paper");
        return "paper";
    }
    else {
        console.log("scissor");
        return "scissor";
    }
}

function getHumanChoice() {
    while (true) {

        let input = prompt("Enter your choice (rock, paper or scissor)");
        input = input.toLowerCase();

        if (input == "rock") {
            console.log("rock");
            return "rock";
        }
        else if (input == "paper") {
            console.log("paper");
            return "paper";
        }
        else if (input == "scissor") {
            console.log("scissor");
            return "scissor";
        }
        else {
            console.log("Please input valid choice (rock, paper or scissor");
            alert("Please input valid choice (rock, paper or scissor)");
        }
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! Paper beats Rock");
        alert("You win! Paper beats Rock");
        humanScore++;
    }
    else if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("Computer win! Paper beats Rock");
        alert("Computer win! Paper beats Rock");
        computerScore++;
    }
    else if (humanChoice == "rock" && computerChoice == "scissor") {
        console.log("You win! Rock beats Scissor");
        alert("You win! Rock beats Scissor");
        humanScore++;
    }
    else if (humanChoice == "scissor" && computerChoice == "rock") {
        console.log("Computer win! Rock beats Scissor");
        alert("Computer win! Rock beats Scissor");
        computerScore++;
    }
    else if (humanChoice == "scissor" && computerChoice == "paper") {
        console.log("You win! Scissor beats Paper");
        alert("You win! Scissor beats Paper");
        humanScore++;
    }
    else if (humanChoice == "paper" && computerChoice == "scissor") {
        console.log("Computer win! Scissor beats Paper");
        alert("Computer win! Scissor beats Paper");
        computerScore++;
    }
    else {
        console.log("Tie, play again");
        alert("Tie, play again");
    }
    console.log("Your Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
    alert("Your Score: " + humanScore);
    alert("Computer Score: " + computerScore);
}