
function computerPlay() {
    let choices = ["rock", "scissors", "paper"]
    let thing = Math.floor(Math.random()*3)
    return choices [thing]
}
let computerScore = 0
let playerScore = 0
function round(playerSelection, computerSelection) {
    computerSelection = computerPlay()
    playerSelection = prompt("Pick rock, paper, or scissors.").toLowerCase()
    if (computerSelection == playerSelection){
        console.log("It's a tie.")
    } else if (computerSelection == "paper" && playerSelection == "rock") {
        console.log("You lose. Paper beats rock") 
        return computerScore +=1
    } else if (computerSelection == "paper" && playerSelection == "scissors") {
        console.log("You win! Scissors beats rock!")
        return playerScore +=1
    } else if (computerSelection == "rock" && playerSelection == "paper") {
        console.log("You win! Paper beats rock!")
        return playerScore +=1
    } else if (computerSelection == "rock" && playerSelection == "scissors") {
        console.log("You lose. Rock beats scissors.")
        return computerScore +=1
    } else if (computerSelection == "scissors" && playerSelection == "paper") {
        console.log("You lose! Scissor beat paper.")
        return computerScore +=1
    } else {
        console.log("You win! Rock beats scissors.")
        return playerScore +=1
    }
 }

 function game() {
    for (let i = 0; i < 5; i++) {
        round()
     }
     if (playerScore == computerScore) {
         console.log ("It's a tie game.")
     } else if (playerScore < computerScore) {
         console.log("You won!")
     } else {
         console.log("You lose.")
     }
 }
 game()
