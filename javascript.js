
function computerPlay() {
    let thing = Math.floor(Math.random()*3)
    if (thing = 0) {
        return "Paper";
    } else if (thing = 1) {
        return "Rock"
    } else {
        return "Scissors"
    }
}
function round(playerSelection, computerSelection) {
    return "You win! Paper beats rock."
}