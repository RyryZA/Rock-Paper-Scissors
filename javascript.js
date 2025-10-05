
function getComputerChoice () {
    //sets the computer random choice number
    let num = Math.random();

    //returns the play as either rock, paper or scissors
    if (num > 0.66) {
        return 'Computer: Rock'
    } else if (num < 0.66 && num > 0.33) {
        return 'Computer: Paper'
    } else {
        return 'Computer: Scissors';
    }
    
};


function getHumanChoice () {
    //use a prompt to ask for user choice (1-3)
    let choice = prompt ('Please enter your choice, 1 = Rock, 2 = Paper, 3 = Scissors');

    if (choice == 1) {
        return 'You: Rock';
    } else if (choice == 2) {
        return 'You: Paper';
    } else {
        return 'You: Scissors'
    }
    //convert prompt into choice
}

console.log (getHumanChoice());
console.log (getComputerChoice());
