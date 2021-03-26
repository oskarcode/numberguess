// declare the varibvale
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


// write functions below

// generate the target number 
const generateTarget = () => Math.floor(Math.random() * 10);

// comare the guess and return true and false
const compareGuesses = (hguess, cguess, tguess) => {
    if (hguess >= 9 || hguess <= 0) {
        window.alert('Next time, stay in the safe zone of 0 through 9');
    }
    else if (Math.abs(hguess - tguess) <= Math.abs(cguess - tguess)) {
        return true;
    }
    else {
        return false;
    }

}

// update the score according to winners
const updateScore = winner => {
    if (winner = 'human') {
        humanScore++;
    }
    else {
        computerScore++;
    }

}

// add one to round and start next round
const advanceRound = () => currentRoundNumber++;
