/// array of images
var images = ["url(images/man.jpg)", 
            "url(images/clooney.jpg)", 
            "url(images/gomez.jpg)", 
            "url(images/fauci.jpg)", 
            "url(images/reginaKing.jpg)"]

var names = ["Sandy", "George", "Selena", "Anthony", "Regina"]

var stars = ["<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='far fa-star'></i>",  
            "<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star-half-alt'></i><i class='far fa-star'></i>", 
            "<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='far fa-star'></i><i class='far fa-star'></i>", 
            "<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i>", 
            "<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star-half-alt'></i><i class='far fa-star'></i>"]

var reviews = [
            "Sandy Says: Honestely, I really loved how the man goes about his work. It may not seem like he does a lot, but in reality it's all about what's happening up there, ya know, the brain. Great service! Highly recommend!",
            "George Says: Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati pariatur harum tempore assumenda in quasi doloribus corrupti totam? Distinctio cum harum soluta voluptas saepe suscipit non recusandae, rem quam amet.",
            "Selena Says: Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi explicabo ipsa saepe, dolor consequatur vero eaque illum corrupti repudiandae ullam magni sint doloremque aliquid libero nobis, neque perspiciatis atque eius.",
            "Anthony Says: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam in sunt, aut possimus nihil perferendis velit nostrum corporis inventore quod nesciunt aperiam suscipit dolor impedit doloremque quam molestiae non ducimus!",
            "Regina Says: Lorem ipsum dolor sit amet consecteturadipisicing elit. Tempora nulla delectus est sapiente quaerat totam fugiat, vel vitae quae necessitatibus accusamus odit deleniti magni. Sunt doloremque maiores animi atque ad"]

var i = 0

function goRight() {
    i ++
    if (i > 4) {
        i = 0
    }
    document.getElementById('customer_pic').style.content = images[i]
    document.getElementById('stars').innerHTML = stars[i]
    document.getElementById('client').innerHTML = names[i]
    document.getElementById('testimonial').innerHTML = reviews[i]
}

function goLeft() {
    i --
    if (i < 0) {
        i = 4
    }
    document.getElementById('customer_pic').style.content = images[i]
    document.getElementById('stars').innerHTML = stars[i]
    document.getElementById('client').innerHTML = names[i]
    document.getElementById('testimonial').innerHTML = reviews[i]

}