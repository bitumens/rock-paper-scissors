function getCompChoice() {
    selection = Math.random();

    if (selection < 0.33) {
        console.log('Computer selected rock!');
        return 'rock';
    }
    else if (selection > 0.66) {
        console.log('Computer selected paper!');
        return 'paper'
    }
    else {
        console.log('Computer selected scissors!');
        return 'scissors'
    }
} 

function getUserChoice() {
    return prompt('Enter your selection! Rock, paper, or scissors.','').toLowerCase();
}

function playRound(userSelection, compSelection) {
    if 
       ((userSelection === 'rock' && compSelection === 'scissors') ||
        (userSelection === 'paper' && compSelection === 'rock') ||
        (userSelection === 'scissors' && compSelection === 'paper')) {
            return 'userWin';
        }
    if ((compSelection === 'rock' && userSelection === 'scissors') ||
        (compSelection === 'paper' && userSelection === 'rock') ||
        (compSelection === 'scissors' && userSelection === 'paper')) {
            return 'compWin';
        }
    if (userSelection === compSelection) {
        return 'draw';
    }
};

function game() {
    let userScore = 0;
    let compScore = 0;

    console.log('First to three, wins!')

    while (userScore < 3 && compScore < 3) {
        const result = (playRound(getUserChoice(), getCompChoice()));
            if (result === 'userWin') {
                userScore++;
                console.log('You won that round! Take that, computer!');
            }
            if (result === 'compWin') {
                compScore++;
                console.log('You lost this round. Ouch.');
            }
            if (result === 'draw') {
                console.log('Draw! Go again!.')
            }
            console.log(`User score: ${userScore}. Computer score: ${compScore}.`); 
    }
    
    console.log(`Final results! User: ${userScore}. Computer: ${compScore}.`);
        if (userScore > compScore) {
            console.log('Congratulations! You won this game. You will not be receiving a prize...');
        }
        else {
            console.log('Boo! You lost against the computer. Take a long hard look at yourself sir.');
         }
}

game();