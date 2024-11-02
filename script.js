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

