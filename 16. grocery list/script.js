function addItem() {
    var item = document.getElementById('newItem').value

    if (item === '') {

    } else {
        var list_item = document.createElement('li')  
    var gone = document.createElement('button')

    list_item.innerHTML = item
    list_item.setAttribute("class", "items")

    gone.setAttribute('class', 'buttons')
    gone.innerHTML = 'Delete'

    document.getElementById('list').append(list_item)

    document.getElementById('newItem').value = ''
    }
    
}



function clearItems() {
    var x = document.querySelectorAll(".items")
    var i
    for (i = 0; i < x.length; i++) {
        x[i].remove()
    }
}