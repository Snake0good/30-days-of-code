document.querySelector(".random").addEventListener("click", function(){
    var randomColors = [];
    var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    randomColors.push(hue);
    console.log(hue);
    document.body.style.background = hue;
});



function goRed() {
    document.querySelector(".body").style.backgroundColor = "red";
}

function goOrange() {
    document.querySelector(".body").style.backgroundColor = "orange";
}

function goYellow() {
    document.querySelector(".body").style.backgroundColor = "yellow";
}

function goGreen() {
    document.querySelector(".body").style.backgroundColor = "green";
}

function goBlue() {
    document.querySelector(".body").style.backgroundColor = "Blue";
}

function goIndigo() {
    document.querySelector(".body").style.backgroundColor = "indigo";
}

function goViolet() {
    document.querySelector(".body").style.backgroundColor = "violet";
}