
function computerPlay() {
    let choices = ["rock", "scissors", "paper"]
    let thing = Math.floor(Math.random()*3)
    return choices [thing]
} // function randomly chooses rock paper or scissors


let computerScore = 0 // initial scores
let playerScore = 0

const PlayerTotal = document.getElementById('playerScore')
const computerTotal = document.getElementById('computerScore')



const div = document.getElementById('foo') // parent node for text elements
const tie = document.createElement('div') // text to run in case of a tie
tie.textContent = "It's a tie."
const paperLose = document.createElement('div') // text to run if computer chooses paper (player lose)
paperLose.textContent = "You lose. Paper beats rock."
const paperWin = document.createElement("div") // text to run if computer chooses paper (player win)
paperWin.textContent = 'Yow win! Scissors beat paper.'
const rockWin = document.createElement('div') //text to run if computer chooses rock (player win)
rockWin.textContent = "You win! Paper beats rock!"
const rockLose = document.createElement('div') // first part is computer decision, second part is player outcome
rockLose.textContent = "You lose. Rock beats scissors"
const scissorsLose = document.createElement('div')
scissorsLose.textContent = "You lose. Scissors beats Paper"
const scissorsWin = document.createElement('div')
scissorsWin.textContent = "You win! Rock beats Scissors"
function round(playerSelection, computerSelection) {
    computerSelection = computerPlay()
    if (computerSelection == playerSelection){
        div.appendChild(tie)
    } else if (computerSelection == "paper" && playerSelection == 'rock') {
        div.appendChild(paperLose) 
        computerScore += 1
        PlayerTotal.textContent = `Player Score: ${playerScore}`
        computerTotal.textContent = `Computer Score: ${computerScore}`
    } else if (computerSelection == "paper" && playerSelection == "scissors") {
        div.appendChild(paperWin)
        playerScore += 1
        PlayerTotal.textContent = `Player Score: ${playerScore}`
        computerTotal.textContent = `Computer Score: ${computerScore}`
    } else if (computerSelection == "rock" && playerSelection == "paper") {
        div.appendChild(rockWin)
        playerScore += 1
        PlayerTotal.textContent = `Player Score: ${playerScore}`
        computerTotal.textContent = `Computer Score: ${computerScore}`
    } else if (computerSelection == "rock" && playerSelection == "scissors") {
        div.appendChild(rockLose)
        computerScore +=1
        PlayerTotal.textContent = `Player Score: ${playerScore}`
        computerTotal.textContent = `Computer Score: ${computerScore}`
    } else if (computerSelection == "scissors" && playerSelection == "paper") {
        div.appendChild(scissorsLose)
        computerScore += 1
        PlayerTotal.textContent = `Player Score: ${playerScore}`
        computerTotal.textContent = `Computer Score: ${computerScore}`
    } else if (computerSelection == 'scissors' && playerSelection == 'rock') {
        div.appendChild(scissorsWin)
        playerScore += 1
        PlayerTotal.textContent = `Player Score: ${playerScore}`
        computerTotal.textContent = `Computer Score: ${computerScore}`
    }
 }

 function removeChildren() {
    const myNode = document.getElementById("foo");
    while (myNode.lastElementChild) {
      myNode.removeChild(myNode.lastElementChild);
    } // code from internet that 'toggles' the result text
  }
  function gameOver() {
    if (computerScore == 5 && playerScore < 5) {
        div.append("It's over. You lose.")
        document.getElementsByClassName('rock').disabled = true
        document.getElementsByClassName('paper').disabled = true
        document.getElementsByClassName('scissors').disabled = true
       } else if (playerScore == 5 && computerScore < 5) {
           div.append('You Win!')
           document.getElementsByClassName('rock').disabled = true
           document.getElementsByClassName('paper').disabled = true
           document.getElementsByClassName('scissors').disabled = true
       }
}
 const rock = document.querySelector('.rock')
 rock.addEventListener('click', (e) => {
     if (div.hasChildNodes()) {
         removeChildren()
         round('rock')
         gameOver()
     }
     else {
        round('rock')
        gameOver()
     }
 })

 const paper = document.querySelector('.paper')
 paper.addEventListener('click', (e) => {
     if (div.hasChildNodes()) {
        removeChildren()
        round('paper')
        gameOver()
    } else {
        round('paper')
        gameOver()
    }
 })
 const scissors = document.querySelector('.scissors')
 scissors.addEventListener('click', (e) => {
      if (div.hasChildNodes()) {
        removeChildren()
        round('scissors')
        gameOver()
    } else {
        round('scissors')
        gameOver()
    }
 })




 