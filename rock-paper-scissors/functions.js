function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
  let humanChoice = prompt("Please enter your choice: ");
  return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

const userScoreSpan = document.querySelector(".user-score");
const computerScoreSpan = document.querySelector(".computer-score");
const winner = document.querySelector(".winner");
const computerSelects = document.querySelector(".computerSelected");

function playRound(humanChoice, computerChoice) {
  try {
    if (humanChoice.toLowerCase() == "rock" && computerChoice == "paper") {
      computerSelects.textContent = "Oops, Computer chose: " + computerChoice;
      computerScore++;
    } else if (humanChoice.toLowerCase() == "rock" && computerChoice == "scissors") {
      computerSelects.textContent = "Point!! Computer chose: " + computerChoice;
      humanScore++;
    }

    if (humanChoice.toLowerCase() == "paper" && computerChoice == "scissors") {
      computerSelects.textContent = "Oops, Computer chose: " + computerChoice;
      computerScore++;
    } else if (humanChoice.toLowerCase() == "paper" && computerChoice == "rock") {
      computerSelects.textContent = "Point!! Computer chose: " + computerChoice;
      humanScore++;
    }

    if (humanChoice.toLowerCase() == "scissors" && computerChoice == "rock") {
      computerSelects.textContent = "Oops, Computer chose: " + computerChoice;
      computerScore++;
    } else if (humanChoice.toLowerCase() == "scissors" && computerChoice == "paper") {
      computerSelects.textContent = "Point!! Computer chose: " + computerChoice;
      humanScore++;
    }
  } catch (error) {
    console.log(error);
  }
  userScoreSpan.textContent = humanScore;
  computerScoreSpan.textContent = computerScore;
  console.log("You: " + humanScore + "  vs  " + computerScore + " Computer");

  if (computerScore == 5) {
    winner.textContent = "YOU LOSE....!!!";
    computerScore = humanScore = 0;
  } else if (humanScore == 5) {
    winner.textContent = "YOU'RE A WINNER!!!!!!";
    computerScore = humanScore = 0;
  } else {
    winner.textContent = "";
  }
}

let humanSelection = "";
const btn_rock_div = document.querySelector(".rps-gui");

btn_rock_div.addEventListener("click", (event) => {
  const target = event.target.id;
  switch (target) {
    case "rock":
      // alert("Rock");
      humanSelection = "rock";
      playRound(humanSelection, getComputerChoice());
      break;
    case "paper":
      // alert("Paper");
      humanSelection = "paper";
      playRound(humanSelection, getComputerChoice());
      break;
    case "scissors":
      // alert("Scissors");
      humanSelection = "scissors";
      playRound(humanSelection, getComputerChoice());
      break;
    default:
      alert("DEFAULT DEFAULT DEFAULT DEFAULT ");
  }
});
