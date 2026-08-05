const choices = document.querySelectorAll(".choice");
const result = document.querySelector(".result");

const score = document.querySelectorAll(".score p");

let userScore = 0;
let computerScore = 0;

const options = ["rock", "paper", "scissors"];

// Generate computer choice
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

// Decide winner
function playGame(userChoice) {

    const computerChoice = getComputerChoice();

    if (userChoice === computerChoice) {
        result.textContent = `🤝 Draw! Both chose ${userChoice}`;
        return;
    }

    if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        userScore++;
        score[0].textContent = userScore;
        result.textContent = `🎉 You Win! ${userChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        score[1].textContent = computerScore;
        result.textContent = `😢 Computer Wins! ${computerChoice} beats ${userChoice}`;
    }
}

// Button click events
choices.forEach((button) => {
    button.addEventListener("click", () => {
        const userChoice = button.classList[1]; // rock, paper, or scissors
        playGame(userChoice);
    });
});
const resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", () => {
    userScore = 0;
    computerScore = 0;

    score[0].textContent = userScore;
    score[1].textContent = computerScore;

    result.textContent = "Choose your move!";
});