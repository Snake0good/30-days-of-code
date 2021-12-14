var mains = document.getElementById('content').querySelectorAll('.main')
var app = document.getElementById('content').querySelectorAll('.appetizers')
var drink = document.getElementById('content').querySelectorAll('.drink')

var i

function getMains() {
    for (i = 0; i < app.length; i++) {
        mains[i].style.display = 'block'
    }

    for (i=0; i < app.length; i++) {
        app[i].style.display = 'none'
    }
    
    for (i=0; i< drink.length; i++) {
        drink[i].style.display = 'none'
    }
}

function getApps() {
    for (i = 0; i < app.length; i++) {
        mains[i].style.display = 'none'
    }

    for (i=0; i < app.length; i++) {
        app[i].style.display = 'block'
    }
    
    for (i=0; i< drink.length; i++) {
        drink[i].style.display = 'none'
    }
}

function getDrinks() {
    for (i = 0; i < app.length; i++) {
        mains[i].style.display = 'none'
    }

    for (i=0; i < app.length; i++) {
        app[i].style.display = 'none'
    }
    
    for (i=0; i< drink.length; i++) {
        drink[i].style.display = 'block'
    }
}

function getAll() {
    for (i = 0; i < app.length; i++) {
        mains[i].style.display = 'block'
    }

    for (i=0; i < app.length; i++) {
        app[i].style.display = 'block'
    }
    
    for (i=0; i< drink.length; i++) {
        drink[i].style.display = 'block'
    }
}