const choices = document.querySelectorAll(".choice");
const result = document.querySelector(".result");

const score = document.querySelectorAll(".score p");

const resetBtn = document.getElementById("reset");

let userScore = Number(localStorage.getItem("userScore")) || 0;
let computerScore = Number(localStorage.getItem("computerScore")) || 0;

score[0].textContent = userScore;
score[1].textContent = computerScore;

const options = ["rock", "paper", "scissors"];

// Generate Computer Choice
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

// Save Scores
function saveScores() {
    localStorage.setItem("userScore", userScore);
    localStorage.setItem("computerScore", computerScore);
}

// Display Result
function showResult(message, color) {
    result.textContent = message;
    result.style.background = color;
    result.style.color = "#fff";
}

// Main Game
function playGame(userChoice) {

    showResult("🤖 Computer is thinking...", "#555");

    setTimeout(() => {

        const computerChoice = getComputerChoice();

        if (userChoice === computerChoice) {

            showResult(
                `🤝 Draw! Both chose ${userChoice.toUpperCase()}`,
                "#f4b400"
            );

            return;
        }

        const userWon =
            (userChoice === "rock" && computerChoice === "scissors") ||
            (userChoice === "paper" && computerChoice === "rock") ||
            (userChoice === "scissors" && computerChoice === "paper");

        if (userWon) {

            userScore++;
            score[0].textContent = userScore;

            showResult(
                `🎉 You Win! ${userChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}`,
                "#28a745"
            );

        } else {

            computerScore++;
            score[1].textContent = computerScore;

            showResult(
                `😢 Computer Wins! ${computerChoice.toUpperCase()} beats ${userChoice.toUpperCase()}`,
                "#dc3545"
            );
        }

        saveScores();

    }, 1000);
}

// Button Click Events
choices.forEach((button) => {

    button.addEventListener("click", () => {

        const userChoice = button.classList[1];

        playGame(userChoice);

    });

});

// Reset Button
resetBtn.addEventListener("click", () => {

    userScore = 0;
    computerScore = 0;

    score[0].textContent = userScore;
    score[1].textContent = computerScore;

    localStorage.clear();

    showResult("🎮 Choose your move!", "#444");

});