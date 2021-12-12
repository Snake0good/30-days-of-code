/// array of images
var images = ["url(images/snow_mountain_1.jpg)", 
            "url(images/snow_mountain_2.jpg)", 
            "url(images/snow_mountain_3.jpg)", 
            "url(images/snow_mountain_4.jpg)", 
            "url(images/snow_mountain_5.jpg)"]
var i = 0

function goRight() {
    i ++
    if (i > 4) {
        i = 0
    }
    document.getElementById('background').style.backgroundImage = images[i]
    document.getElementById('instructions').remove()
}

function goLeft() {
    i --
    if (i < 0) {
        i = 4
    }
    document.getElementById('background').style.backgroundImage = images[i]
    document.getElementById('instructions').remove()
}