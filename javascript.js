
function getComputerChoice () {
    let num = Math.random();

    if (num > 0.66) {
        return 'Rock'
    } else if (num < 0.66 && num > 0.33) {
        return 'Paper'
    } else {
        return 'Scissors'
    }
    //returns the play as either rock, paper or scissors
};


console.log (getComputerChoice());