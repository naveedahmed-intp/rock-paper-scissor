let computerScore = 0;
let humanScore = 0;
let round = 0;
let choice = "";

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

    let roundNo = document.querySelector("#round");
    let score = document.querySelector("#score");
    let buttons = document.querySelectorAll(".btn");
    let reset = document.querySelector("#reset")
    let userInput = document.querySelector("#userInput");
    let computerInput = document.querySelector("#computerInput");
    let roundResult = document.querySelector("#roundResult");
    let finalResult = document.querySelector("#finalResult");

    buttons.forEach(button => {
        button.addEventListener('click', event => {
            playerChoice = event.target.id;
            playRound(playerChoice, getComputerChoice());
        })
    });

 function playRound(humanChoice, computerChoice) {
    if (humanScore < 5 && computerScore < 5) {
        if (humanChoice == "paper" && computerChoice == "rock") {
            console.log("You win! Paper beats Rock");
            userInput.textContent = "You chose " + humanChoice ;
            computerInput.textContent = "Computer chose " + computerChoice ; ;
            roundResult.textContent = "You win! Paper beats Rock";
            humanScore++;
            round++;
        }
        else if (humanChoice == "rock" && computerChoice == "paper") {
            console.log("Computer win! Paper beats Rock");
            userInput.textContent = "You chose " + humanChoice ;
            computerInput.textContent = "Computer chose " + computerChoice ; ;
            roundResult.textContent = "Computer win! Paper beats Rock";
            computerScore++;
            round++;
        }
        else if (humanChoice == "rock" && computerChoice == "scissor") {
            console.log("You win! Rock beats Scissor");
            userInput.textContent = "You chose " + humanChoice ;
            computerInput.textContent = "Computer chose " + computerChoice ; ;
            roundResult.textContent = "You win! Rock beats Scissor";
            humanScore++;
            round++;
        }
        else if (humanChoice == "scissor" && computerChoice == "rock") {
            console.log("Computer win! Rock beats Scissor");
            userInput.textContent = "You chose " + humanChoice ;
            computerInput.textContent = "Computer chose " + computerChoice ; ;
            roundResult.textContent = "Computer win! Rock beats Scissor";
            computerScore++;
            round++;
        }
        else if (humanChoice == "scissor" && computerChoice == "paper") {
            console.log("You win! Scissor beats Paper");
            userInput.textContent = "You chose " + humanChoice ;
            computerInput.textContent = "Computer chose " + computerChoice ; ;
            roundResult.textContent = "You win! Scissor beats Paper";
            humanScore++;
            round++;
        }
        else if (humanChoice == "paper" && computerChoice == "scissor") {
            console.log("Computer win! Scissor beats Paper");
            userInput.textContent = "You chose " + humanChoice ;
            computerInput.textContent = "Computer chose " + computerChoice ; ;
            roundResult.textContent = "Computer win! Scissor beats Paper";        
            computerScore++;
            round++;
        }
        else {
            console.log("Tie!" + "\nYou Chose: " + humanChoice + "\nComputer Chose: " + computerChoice);
            userInput.textContent = "You chose " + humanChoice ;
            computerInput.textContent = "Computer chose " + computerChoice ; ;
            roundResult.textContent = "Round Tie!";
            round++;
            }
    } 
    else if (computerScore == 5) {
        finalResult.textContent = "You lose. Computer is more smarter than you baby!";
    }
    else {
        finalResult.textContent = "You beat computer. You are bad ass!";
    }
    console.log("Your Score: "+ humanScore + " | Computer Score: " + computerScore);
    score.textContent = "Your Score: " + humanScore + " | Computer Score: " + computerScore;
}

reset.addEventListener('click', event => {
    userInput.textContent ="";
    computerInput.textContent="";
    roundResult.textContent="";
    score.textContent="";
    finalResult.textContent="";
    computerScore = 0;
    humanScore = 0;
});



