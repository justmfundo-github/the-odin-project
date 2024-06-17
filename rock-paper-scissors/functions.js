function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
  let humanChoice = prompt("Please enter your choice: ");
  return humanChoice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    try {
      if (humanChoice.toLowerCase() == "rock" && computerChoice == "paper") {
        console.log("You lose, Computer wins with " + computerChoice);
        computerScore++;
      } else if (humanChoice.toLowerCase() == "rock" && computerChoice == "scissors") {
        console.log("You win, Computer loses with " + computerChoice);
        humanScore++;
      }

      if (humanChoice.toLowerCase() == "paper" && computerChoice == "scissors") {
        console.log("You lose, Computer wins with " + computerChoice);
        computerScore++;
      } else if (humanChoice.toLowerCase() == "paper" && computerChoice == "rock") {
        console.log("You win, Computer loses with " + computerChoice);
        humanScore++;
      }

      if (humanChoice.toLowerCase() == "scissors" && computerChoice == "rock") {
        console.log("You lose, Computer wins with " + computerChoice);
        computerScore++;
      } else if (humanChoice.toLowerCase() == "scissors" && computerChoice == "paper") {
        console.log("You win, Computer loses with " + computerChoice);
        humanScore++;
      }
    } catch (error) {
      console.log(error);
    }

    console.log("You: " + humanScore + "  vs  " + computerScore + " Computer");
  }

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }

  if (humanScore < computerScore) {
    console.log("YOU LOSE....!!!");
  } else {
    console.log("YOU'RE A WINNER!!!!!!");
  }
}
