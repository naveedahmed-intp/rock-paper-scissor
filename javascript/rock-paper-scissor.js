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

