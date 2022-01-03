var player_choice = document.getElementById("play_selection")
var comp_choice = document.getElementById("comp_selection")
var result = document.getElementById('result')
var player_score = document.getElementById('play_score')
var computer_score = document.getElementById('comp_score')

var play_score = 0
var comp_score = 0

function flipCoin() {
    if (player_choice.innerText == "") {
        window.alert("Pleas make a choice!")
    } else {
        x = Math.floor(Math.random() * 2)
    
        if (x === 1  &&  player_choice.innerText == "HEADS") {
            result.innerHTML = "HEADS"
            play_score++
            player_score.innerHTML = play_score
        } 
        if (x === 0  &&  player_choice.innerText == "TAILS") {
            result.innerHTML = "TAILS"
            play_score++
            player_score.innerHTML = play_score
        } 
        if (x === 0 && player_choice.innerText == "HEADS") {
            result.innerHTML = "TAILS"
            comp_score++
            computer_score.innerHTML = comp_score
        } 
        if (x === 1 && player_choice.innerText == "TAILS") {
            result.innerHTML = "HEADS"
            comp_score++
            computer_score.innerHTML = comp_score
        }
    }
}

function choseHeads() {
    player_choice.innerHTML = "HEADS"
    comp_choice.innerHTML = "tails"
}

function choseTails() {
    player_choice.innerHTML = "TAILS"
    comp_choice.innerHTML = "heads"
}