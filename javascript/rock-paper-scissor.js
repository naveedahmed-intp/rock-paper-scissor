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


        let buttons = document.querySelectorAll("button");
        let input = document.querySelector("#input");

        buttons.forEach(function(button) {
            button.addEventListener('click', function(e) {
            let target = e.target;
            switch(target.id) {
                case 'rock':
                input.textContent = "You Selected Rock."
                break;
                case 'paper':
                input.textContent = "You Selected Paper."
                break;
                case 'scissor':
                input.textContent = "You Selected Scissor."
                break;
            }
        });
        });




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
        console.log("Tie!" + "\nYou Chose: " + humanChoice + "\nComputer Chose: " + computerChoice);
        alert("Tie!" + "\nYou Chose: " + humanChoice + "\nComputer Chose: " + computerChoice);
    }
    console.log("Your Score: "+ humanScore + " | Computer Score: " + computerScore);
    alert("Your Score: " + humanScore + " \nComputer Score: " + computerScore);
}

/*function playGame() {
    for (let i = 1; i<=5; i++) {
        alert("Round: " + i)
        playRound(getHumanChoice(), getComputerChoice());
        if (i==5) {
            console.log("Five rounds completed.");
            if (humanScore>computerScore) {
                console.log("Congratulations, You won the game!");
                alert("Congratulations, You won the game!");
                console.log("Your Score: "+ humanScore + " | Computer Score: " + computerScore);
            }
            else if (computerScore > humanScore) {
                console.log("You lose, Computer is more smarter than you!")
                alert("You lose, Computer is more smarter than you!")
                console.log("Your Score: "+ humanScore + " | Computer Score: " + computerScore);
            }
            else {
                console.log("Match tied, both won equal rounds!");
                alert("Match tied, both won equal rounds!");
                console.log("Your Score: "+ humanScore + " | Computer Score: " + computerScore);
            }
        }
    }
}*/