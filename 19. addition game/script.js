var score = 0

function check() {
    var number1 = document.getElementById('fnum').innerHTML
    var number2 = document.getElementById('snum').innerHTML
    var answer = document.getElementById('answer').value

    if ((Number(number1) * Number(number2)) === Number(answer)) {
        score++
        document.getElementById('score').innerHTML = score
    } else {
        score--
        document.getElementById('score').innerHTML = score
    }

    document.getElementById('header').innerHTML = " " + number1 + " x " + number2 + " = " + (Number(number1) * Number(number2))

    document.getElementById('fnum').innerHTML = Math.floor((Math.random() * 12))
    document.getElementById('snum').innerHTML = Math.floor((Math.random() * 12))

    document.getElementById('answer').value = ''
}