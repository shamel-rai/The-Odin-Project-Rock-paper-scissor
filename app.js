function getComputerChoice() {
    let randomNumber = Math.floor((Math.random() * 3) + 1);
    if (randomNumber === 1) {
        return "Rock";
    }
    else if (randomNumber === 2) {
        return "Scissor";
    }
    else {
        return "Paper";
    }
}

function getPlayerChoice() {
    let userInput = prompt("Enter '1' for rock '2' for scissor and '3' for paper: ");
    if (+userInput === 1) {
        return "Rock";
    }
    else if (+userInput == 2) {
        return "scissor";
    }
    else if (+userInput == 3) {
        return "paper";
    }
    else {
        return "Please enter the correct number as stated!!!!!!";
    }

}




let playRound = (playerSelection, computerSelection) => {

    const playerWin = `You win, you choose ${playerSelection} and the computer picked ${computerSelection}`;
    const computerWin = `You loose, you choose ${playerSelection} and the computer picked ${computerSelection}`
    const draw = `Ohhhhhhh, a drawww , You choose ${playerSelection} and the computer picked ${computerSelection}`;

    if (playerSelection == computerSelection && computerSelection == playerSelection) {
        return draw;
    } else if (playerSelection > computerSelection && computerSelection < playerSelection) {
        return computerWin;
    } else if (playerSelection < computerSelection && computerSelection > playerSelection) {
        return playerWin;
    } else {
        return 0;
    }
}


let playGame = () => {
    let playerCounter = 0;
    let computerCounter = 0;
    for (let i = 1; i <= 5; i++) {
        let computerSelection = getComputerChoice();
        let playerSelection = getPlayerChoice();
        console.log(playRound(playerSelection, computerSelection));
        if (playerSelection == computerSelection) {
            playerCounter++;
            computerCounter++
        }
        else if (playerSelection > computerSelection) {
            computerCounter++;
        }
        else if (playerSelection < computerSelection) {
            playerCounter++
        }
        console.log(`Playerscore ${playerCounter} and ComputerScore ${computerCounter}`);
    }
    if (playerCounter > computerCounter) {
        console.log("Player wins!!!");
    } else {
        console.log("Computer Wins!!!");
    }
}
playGame();