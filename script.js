console.log("Hello World");

function getComputerChoice () {
    let number = Math.random() *3;
    if (number == 1){
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
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    if ((humanChoice == "rock" && computerChoice == "scissors") || 
    (humanChoice == "scissors" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "rock")) {
        console.log("You win! " + humanChoice + " beats " + computerChoice + ".");
        humanScore++;
    }
    else if (humanChoice === computerChoice){
        console.log("You lose! " + computerChoice + " beats " + humanChoice + ".");
        computerScore++;
    }
    else {
        console.log("Tie: no score");
    }
}


/* function playRound(humanChoice, computerChoice) {
    let humanScore = 0;
    let computerScore = 0;

    if (humanScore && computerScore <= 5) {
    console.log(humanScore + " for humans, " + computerScore + "for the computer");
    }
    else {
        console.log("game over:" + humanScore + " for humans, " + computerScore + "for the computer");
    }
}
*/
function playGame (humanChoice, computerChoice){
   // for (i = 0; i < 5; i--){
        playRound(humanChoice, computerChoice);
  //  }
}

let humanScore = 0;
let computerScore = 0;
playGame(getHumanChoice(), getComputerChoice());