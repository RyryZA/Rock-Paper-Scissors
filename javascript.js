
let humanScore = 0;
let computerScore = 0;

console.log ('Starting Scores: ' + 'You:' + humanScore + ' ' + 'Computer:' + computerScore);

function getComputerChoice () {
    //sets the computer random choice number
    let num = Math.random();
    let compResult = 0;

    //returns the play as either rock, paper or scissors
    if (num > 0.66) {
        compResult = 1;
        console.log ('Computer Chose: Rock');
        return 1
    } else if (num < 0.66 && num > 0.33) {
        compResult = 2;
       console.log ('Computer Chose: Paper');
        return 2
    } else {
        compResult = 3;
        console.log ('Computer Chose: Scissors');
        return 3
    }
    
};

function getHumanChoice () {
    //use a prompt to ask for user choice (1-3)
    
    let choice = prompt ('Please enter your choice, 1 = Rock, 2 = Paper, 3 = Scissors');
    let humanResult = 0;

    //convert prompt into choice

    if (choice == 1) {
        humanResult = 1;
        console.log ('You Chose: Rock');
        return 1;
    } else if (choice == 2) {
        humanResult = 2;
        console.log ('You Chose: Paper');
        return 2;
    } else {
        humanResult = 3;
        console.log ('You Chose: Scissors');
        return 3;
    }

}

function playRound (humanChoice, computerChoice ) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();


    //work out who the winner is
        // first check for a draw - if draw now one wins
        //then check for winning order

        //rock (1) beats scissors (3)
        //scissors (3) beats paper (2)
        //paper (2) beats rock (1)

        //it needs to decide who the winner is
    if (humanChoice == computerChoice) {
        console.log ('Result: Draw');
        return 'Draw';
    } else if (humanChoice == 1 && computerChoice == 3) {
        console.log ('You Win!');
        humanScore++;
    } else if (humanChoice == 3 && computerChoice == 1) {
        console.log ('Result: Computer Wins!');
        computerScore++;
    } else if (humanChoice == 3 && computerChoice == 2) {
        console.log ('Result: You Win!');
        humanScore++;
    } else if (humanChoice == 2 && computerChoice == 3) {
        console.log ('Result: Computer Wins!');
        computerScore++;
    } else if (humanChoice == 2 && computerChoice == 1) {
        console.log ('Result: You Win!');
        humanScore++;
    } else if (humanChoice == 1 && computerChoice == 2) {
        console.log ('Result: Computer Wins!');
        computerScore++;
    }

    console.log ('Your Score: ' + humanScore + ' | ' + 'Computer Score: ' + computerScore);
}

function playGame (rounds) {
    //play the rounds here
    // play 5 rounds to determine the winner
    // declare a winner at the end

    for (let index = 0; index < 5; index++) {
        playRound()
    }

    if (humanScore == computerScore) {
        console.log ('----DRAW----')
        console.log ('Refresh the page to play another game')
    } else if (humanScore > computerScore) {
        console.log ('****YOU WIN THE GAME**** :)')
        console.log ('Refresh the page to play another game')
    } else if (computerScore > humanScore) {
        console.log ('...YOU LOSE TO THE COMPUTER... :(')
        console.log ('Refresh the page to play another game')
    }
}

playGame()