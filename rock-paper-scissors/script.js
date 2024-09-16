let playerScore = 0;
let computerScore = 0;

function playGame(move) {
  let playerMove = move;
  let background = document.querySelector(".background");
  let gameBackground = document.querySelector(".gameBackground");
  let playerChoice = document.querySelector(".playerChoice");
  let computerChoice = document.querySelector(".computerChoice");
  let info = document.querySelector(".info");
  let score = document.querySelector(".score");

  // Hide the background
  background.style.display = "none";

  // Clear previous game results
  playerChoice.innerHTML = "";
  computerChoice.innerHTML = "";
  info.innerHTML = "";
  score.innerHTML = "";

  // Display player's move
  let playerImg = document.createElement("img");
  playerImg.src = `./${playerMove}.svg`;
  playerImg.className = `${playerMove}Img`;
  playerChoice.append(playerImg);

  // Randomly select the computer's move
  let computerMove = "";
  let randomNumber = Math.random();
  if (randomNumber > 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber > 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else {
    computerMove = "scissors";
  }

  // Display computer's move
  let computerImg = document.createElement("img");
  computerImg.src = `./${computerMove}.svg`;
  computerImg.className = `${computerMove}Img`;
  computerChoice.append(computerImg);

  // Create a new header for the result and append it to the info div
  let header = document.createElement("h1");
  header.className = "header";
  info.append(header);

  // Variables to keep track of scores

  // Determine the result and update the header
  if (playerMove === computerMove) {
    header.innerHTML = "DRAW";
  } else if (computerMove === "rock" && playerMove === "paper") {
    header.innerHTML = "YOU WIN";
    playerScore++;
  } else if (computerMove === "rock" && playerMove === "scissors") {
    header.innerHTML = "YOU LOSE";
    computerScore++;
  } else if (computerMove === "paper" && playerMove === "rock") {
    header.innerHTML = "YOU LOSE";
    computerScore++;
  } else if (computerMove === "paper" && playerMove === "scissors") {
    header.innerHTML = "YOU WIN";
    playerScore++;
  } else if (computerMove === "scissors" && playerMove === "paper") {
    header.innerHTML = "YOU LOSE";
    computerScore++;
  } else if (computerMove === "scissors" && playerMove === "rock") {
    header.innerHTML = "YOU WIN";
    playerScore++;
  }

  // Display updated scores
  let playerScoreDiv = document.createElement("div");
  playerScoreDiv.innerHTML = `Player Score: ${playerScore}`;
  score.append(playerScoreDiv);

  let computerScoreDiv = document.createElement("div");
  computerScoreDiv.innerHTML = `Computer Score: ${computerScore}`;
  score.append(computerScoreDiv);

  // Bring back the background after 3 seconds
  

  /* setTimeout(() => {
    background.style.display = "flex";
  }, 3000); */
}


function playAgain() {
    let background = document.querySelector(".background"); // Ensure the background element is referenced
    background.style.display = "flex"; // Bring back the background
    console.log("play again");
  }