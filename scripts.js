const rules = {
    'rock': 'scissors',
    'scissors': 'paper',
    'paper': 'rock',
}

const possibleChoices = Object.keys(rules);

//Function to grab player's choice
function getPlayerChoice() {
    let playerChoice = prompt("Chose your destiny, Rock, Paper or Scissors").toLowerCase();

    if (!possibleChoices.includes(playerChoice)) {
        alert("Please provide a valid choice between Rock, Paper or Scissors");
        playerChoice = getPlayerChoice();
    }

    return playerChoice;
}


//Function to grab computer's choice
function getComputerChoice() {
    let computerChoice = possibleChoices[Math.floor(possibleChoices.length * Math.random())];
    return computerChoice;
}


//Function that plays one round
function gameOn() {
    let p = getPlayerChoice();
    let c = getComputerChoice()
    console.log(p)
    console.log(c)
    if (rules[p] === c) {
        console.log(`Congratulations! You won because ${p} beats ${c}.`)
        return 'pwin'
    } else if (p === c) {
        console.log(`It's a tie, better luck next time!`)
        return 'tie'
    } else {
        console.log(`Computer wins because  ${c} beats ${p}, try again!`)
        return 'cwin'
    }
}

//Function that runs a game for 5 rounds, keeping track of the score
function fiveGames(){
    let pscore = 0;
    let cscore = 0;
    for (let i = 0; i < 5; i++) {
        let result = gameOn();
        if (result == 'pwin') {
            pscore++;
        } else if (result == 'cwin') {
            cscore++;
        } else {
            continue;
        }
    }
    console.log(`Oh what a game! Player: ${pscore} - Computer: ${cscore}`)
}
