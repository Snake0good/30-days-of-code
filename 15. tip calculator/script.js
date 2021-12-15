function calculate() {
    var amount = document.getElementById('bill-amount').value

    document.getElementById('tip20').innerHTML = Math.round(amount * 0.2).toFixed(2)
    document.getElementById('tip15').innerHTML = Math.round(amount * 0.15).toFixed(2)
    document.getElementById('tip10').innerHTML = (amount * 0.1).toFixed(2)


}