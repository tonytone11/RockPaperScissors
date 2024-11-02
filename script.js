// elements that will display scores and results
const playerDisplay = document.querySelector('.player1Score');
const drawDisplay = document.querySelector('.drawScore');
const competitorDisplay = document.querySelector('.competitorScore');
const winnerDisplay = document.querySelector('.winner-result');
const resetBtn = document.querySelector('.again');

// scores 
let playerScore = 0;
let computerScore = 0;
let draws = 0

// computer's fighting options
function getComputerChoice() {
    const fighters = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * fighters.length);
    return fighters[randomIndex];
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
}

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
