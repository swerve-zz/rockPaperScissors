console.log("Hello World");

function getComputerChoice () {
    let number = Math.floor(Math.random() *3);
    if (number == 0){
        return "rock";
    }
    else if (number == 2){
        return "paper";
    }
    else {
        return "scissors";
    } 
}

function getHumanChoice () {
    choice = prompt("user input: Rock, Paper, or Scissors");
    return choice.toLowerCase();
    
}



function playRound(humanChoice, computerChoice) {

    if ((humanChoice == "rock" && computerChoice == "scissors") || 
    (humanChoice == "scissors" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "rock")) {
        console.log("You win! " + humanChoice + " beats " + computerChoice + ".");
        humanScore++;
    }
    else if (humanChoice === computerChoice){
        console.log("Tie: no score");
    }
    else {
        console.log("You lose! " + computerChoice + " beats " + humanChoice + ".");
        computerScore++;
    }
}

let humanScore = 0;
let computerScore = 0;
playGame();

function playGame (){
   for (i = 0; i < 5; i--){

        if ((humanScore + computerScore) < 5) {
        playRound(getHumanChoice(), getComputerChoice());
        console.log(humanScore + " for humans, " + computerScore + " for the computer");
        }
        else {
            console.log("game over:" + humanScore + " for humans, " + computerScore + " for the computer");
        }
    }
}