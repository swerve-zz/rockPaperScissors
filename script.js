console.log("Hello World");

getComputerChoice () {
    let number = Math.random();
    if (number > .33){
        return "rock";
    }
    else if (number > .66){
        return "paper";
    }
    else {
        return "scissors";
    }
}


getHumanChoice () {
    choice = prompt("user input: Rock, Paper, or Scissors");
    return choice.toLowerCase();
}



playRound (humanChoice, computerChoice) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    if (humanChoice == "rock" && computerChoice == "scissors") || 
    (humanChoice == "scissors" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! " + humanChoice + "beats" + computerChoice + ".");
        humanScore++;
    }
    else {
        console.log("You lose! " + computerChoice + "beats" + humanChoice + ".");
        computerScore++;
    }
}


playRound (humanChoice, computerChoice) {
    let humanScore = 0;
    let computerScore = 0;

    if humanScore && computerScore <= 5 {
    console.log(humanScore + " for humans, " + computerScore + "for the computer");
    }
    else {
        console.log("game over" + humanScore + " for humans, " + computerScore + "for the computer");
    }
}

playGame () {
    for (i = 0; i < 5; i--){
        playRound(humanChoice, computerChoice);
    }
}