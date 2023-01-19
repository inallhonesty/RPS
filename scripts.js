const rules = {
    'rock': 'scissors',
    'scissors': 'paper',
    'paper': 'rock',
}

const possibleChoices = Object.keys(rules);


function getPlayerChoice() {
    let playerChoice = prompt("Chose your destiny, Rock, Paper or Scissors").toLowerCase();

    if (!possibleChoices.includes(playerChoice)) {
        alert("Please provide a valid choice between Rock, Paper or Scissors");
        playerChoice = getPlayerChoice();
    }

    return playerChoice;
}

function getComputerChoice() {
    let computerChoice = possibleChoices[Math.floor(possibleChoices.length * Math.random())];
    return computerChoice;
}


function gameOn(p) {
    let c = getComputerChoice()
    if (rules[p] === c) {
        alert(`Congratulations! You won because ${p} beats ${c}.`)
        return 'pwin'
    } else if (p === c) {
        alert(`It's a tie, better luck next time!`)
        return 'tie'
    } else {
        alert(`Computer wins because  ${c} beats ${p}, try again!`)
        return 'cwin'
    }
}


const btns = document.querySelectorAll('button');
let pscore = 0;
let cscore = 0;
let scorePDiv = document.querySelector('.score-p')
let scoreCDiv = document.querySelector('.score-c')


function clearScores() {
    pscore = 0
    cscore = 0
    scoreCDiv.textContent = `${cscore}`
    scorePDiv.textContent = `${pscore}`
}

btns.forEach(function (btn) {
    btn.addEventListener('click', () => {
        let p = btn.id;
        let gameResult = gameOn(p)
        if (gameResult == 'pwin') {
            pscore++;
        } else if (gameResult == 'cwin') {
            cscore++;
        }
        console.log(pscore, cscore)
        scoreCDiv.textContent = `${cscore}`
        scorePDiv.textContent = `${pscore}`

        if (pscore == 5) {
            alert(`Player reached 5 points, congratulations you won! \nThe final score was \nPlayer: ${pscore}\nComputer: ${cscore}`)
            clearScores()
        } else if (cscore == 5) {
            alert(`Computer reached 5 points, congratulations you won! \nThe final score was \nPlayer: ${pscore}\nComputer: ${cscore}`)
            clearScores()
        }
    })
})

