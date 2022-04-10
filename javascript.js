
function computerPlay() {
    let choices = ["rock", "scissors", "paper"]
    let thing = Math.floor(Math.random()*3)
    return choices [thing]
} // function randomly chooses rock paper or scissors


let computerScore = 0 // initial scores
let playerScore = 0
const div = document.querySelector('div') // parent node for text elements
const tie = document.createTextNode("It's a tie.") // text to run in case of a tie
const paperLose = document.createTextNode("You lose. Paper beats rock.") // text to run if computer chooses paper (player lose)
const paperWin = document.createTextNode("Yow win. Scissors beat paper.") // text to run if computer chooses paper (player win)
const rockWin = document.createTextNode("You win! Paper beats rock!") //text to run if computer chooses rock (player win)
const rockLose = document.createTextNode("You lose. ROck beats scissors") // first part is computer decision, second part is player outcome
const scissorsLose = document.createTextNode("You lose. Scissors beats Paper")
const scissorsWin = document.createTextNode("You win! Rock beats Scissors")
function round(playerSelection, computerSelection) {
    computerSelection = computerPlay()
    if (computerSelection == playerSelection){
        div.appendChild(tie)
    } else if (computerSelection == "paper" && playerSelection == 'rock') {
        div.appendChild(paperLose) 
        return computerScore += 1
    } else if (computerSelection == "paper" && playerSelection == "scissors") {
        div.appendChild(paperWin)
        return playerScore += 1
    } else if (computerSelection == "rock" && playerSelection == "paper") {
        div.appendChild(rockWin)
        return playerScore += 1
    } else if (computerSelection == "rock" && playerSelection == "scissors") {
        div.appendChild(rockLose)
        return computerScore +=1
    } else if (computerSelection == "scissors" && playerSelection == "paper") {
        div.appendChild(scissorsLose)
        return computerScore += 1
    } else if (computerSelection == 'scissors' && playerSelection == 'rock') {
        div.appendChild(scissorsWin)
        return playerScore += 1
    }
 }

 const rock = document.querySelector('.rock')
 rock.addEventListener('click', (e) => {
     round('rock')
 })
 const paper = document.querySelector('.paper')
 paper.addEventListener('click', (e) => {
     round('paper')
 })
 const scissors = document.querySelector('.scissors')
 scissors.addEventListener('click', (e) => {
      round('scissors')
 })
