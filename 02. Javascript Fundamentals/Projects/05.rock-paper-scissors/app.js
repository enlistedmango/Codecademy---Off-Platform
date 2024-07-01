const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (
        userInput === "rock" ||
        userInput === "paper" ||
        userInput === "scissors" ||
        userInput === "bomb"
    ) {
        return userInput;
    } else {
        console.log(`Error, you need to make a choice!`);
    }
};

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
        default:
            return "No Choice Made.";
    }
};

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return "The game was a tie";
    }
    if (userChoice === "rock") {
        if (computerChoice === "paper") {
            return "The computer won!";
        } else {
            return "You won!";
        }
    }
    if (userChoice === "paper") {
        if (computerChoice === "scissors" || "rock") {
            return "The Computer Won!";
        } else {
            return "You Won!";
        }
    }
    if (userChoice === "scissors") {
        if (computerChoice === "rock" || "paper") {
            return "The Computer Won!";
        } else {
            return "You Won!";
        }
    }
    // If the user uses the cheat code of bomb, then the user will win no matter what
    if (userChoice === "bomb") {
        if (computerChoice === "rock" || "paper" || "scissors") {
            return "You won with a cheat!!";
        }
    }
};

// I was unsure how to structure this function and so I had to get help.

const playGame = () => {
    const userChoice = getUserChoice("rock");
    const computerChoice = getComputerChoice();
    console.log("You threw: " + userChoice);
    console.log("The computer threw: " + computerChoice);

    console.log(determineWinner(userChoice, computerChoice));
};

playGame();
