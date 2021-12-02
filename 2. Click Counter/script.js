var i = 0;

function addOne() {
    i++;
    document.getElementById('number').innerHTML = i;
}

function minusOne() {
    i--;
    document.getElementById('number').innerHTML = i;
}

function resetToZero() {
    i = 0;
    document.getElementById('number').innerHTML = i;
}