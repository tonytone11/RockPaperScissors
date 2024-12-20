// elements that will display scores and results
// .querySelector - selects HTML elements by their CSS selectors
const playerDisplay = document.querySelector(".player1Score");
const drawDisplay = document.querySelector(".drawScore");
const competitorDisplay = document.querySelector(".competitorScore");
const winnerDisplay = document.querySelector(".winner-results");
const resetBtn = document.querySelector(".again");
// elements for input form and submit button
const userFighter = document.querySelector(".userFighter");
const submitBtn = document.querySelector(".submitFighter");

// scores 
let playerScore = 0;
let computerScore = 0;
let draws = 0

// computer's fighting choice
function getComputerChoice() {
    const fighters = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * fighters.length);
    return fighters[randomIndex];
}

// validate user input
function validateInput(input) {
    const validFighter = ["rock", "paper", "scissors"];
    return validFighter.includes(input.toLowerCase());
}

// rules to determine the winner
function winnerRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "DRAW";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        return "Winner: User";
    } else {
        return "Winner: Opponent";
    }
}

// how to play one or each round
function eachRound(playerChoice) {
    const computerChoice = getComputerChoice();
    const winner = winnerRound(playerChoice, computerChoice);

    // displaying the fighter and who won
    if (winner === "Winner: User") {
        playerScore++;
        winnerDisplay.textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. You won this round!`;
    } else if (winner === "Winner: Opponent") {
        computerScore++;
        winnerDisplay.textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. Your opponent won this round!`;
    } else {
        draws++;
        winnerDisplay.textContent = `Both chose ${playerChoice}. It's a draw`;

    }
    updateScores();
}

// updating scoreboard
function updateScores() {
    playerDisplay.textContent = playerScore;
    competitorDisplay.textContent = computerScore;
    drawDisplay.textContent = draws;
}

// function to reset game
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    draws = 0;
    winnerDisplay.textContent = "Choose Your Fighter!";
    updateScores();
}

// event listener for submit and input
submitBtn.addEventListener("click", function () {
    const playerChoice = userFighter.value.trim().toLowerCase(); // formats user's input
    if (validateInput(playerChoice)) {
        eachRound(playerChoice);
    } else {
        winnerDisplay.textContent = "Choose again! Rock, Paper, or Scissors"
    }
    userFighter.value = ""; // this function clears input
})
resetBtn.addEventListener("click", resetGame);


// event listeners for my buttons
// document.querySelector(".rockType").addEventListener("click", function () {
//     eachRound("rock");
// });
// document.querySelector(".paperType").addEventListener("click", function () {
//     eachRound("paper");
// });
// document.querySelector(".metalType").addEventListener("click", function () {
//     eachRound("scissors");
// });