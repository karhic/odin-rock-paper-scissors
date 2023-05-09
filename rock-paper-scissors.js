function getComputerChoice() {
  let randomNumber = Math.floor((Math.random() * 3))
  if (randomNumber === 0) {
    return "Rock";
  } else if (randomNumber === 1){
    return "Paper";
  } else {
    return "Scissors"
  } 
}
function playRound(playerSelection, computerSelection){
  playerSelection = playerSelection.toUpperCase();
  computerSelection = computerSelection.toUpperCase();
  if (playerSelection == "ROCK"){
    switch (computerSelection){
      case "ROCK":
        return "Draw."
        break;
      case "PAPER":
        return "You Lose."
        break;
      case "SCISSORS":
        return "You Win."
        break;
    }
  } else if (playerSelection == "PAPER"){
    switch (computerSelection){
      case "ROCK":
        return "You Win."
        break;
      case "PAPER":
        return "Draw."
        break;
      case "SCISSORS":
        return "You Lose."
        break;
    }
  } else if (playerSelection == "SCISSORS"){
    switch (computerSelection){
      case "ROCK":
        return "You Lose."
        break;
      case "PAPER":
        return "You Win."
        break;
      case "SCISSORS":
        return "Draw."
        break;
    }
  }
}
let playerScore = 0;
let computerScore = 0;
function playRoundAndUpdate(playerChoice){
  let roundResult = playRound(playerChoice, getComputerChoice());
  if (roundResult === "You Win."){
    playerScore++;
    document.querySelector("#player-score").textContent = "Your Score:" 
        + playerScore.toString(); 
    document.querySelector("#round-result").textContent = "You Win.";
  } else if (roundResult === "You Lose."){
    computerScore++;
    document.querySelector("#computer-score").textContent = "Computer's Score:" 
        + computerScore.toString(); 
    document.querySelector("#round-result").textContent = "You Lose."; 
  } else {
    document.querySelector("#round-result").textContent = "Draw."; 
  }
  if (computerScore == 5){
    alert("Computer Wins.");
  } else if (playerScore == 5){
    alert("You Win.")
  }
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
rock.addEventListener("click", () => {
  playRoundAndUpdate("rock");
});
paper.addEventListener("click", () => {
  playRoundAndUpdate("paper");
});
scissors.addEventListener("click", () => {
  playRoundAndUpdate("scissors");
});
