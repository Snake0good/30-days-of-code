var i = 0

function addItem() {
    if (document.getElementById('input_item').value == '') {

    } else {
        const newItem = document.getElementById('input_item').value
    
        
        
        const ele = document.createElement('li')
        ele.innerHTML = newItem
        ele.setAttribute('class', 'item')

        document.getElementById('the_list').appendChild(ele)


        /* 
        var check = document.createElement('i')
        var edit = document.createElement('i')
        var trash = document.createElement('i')
    
        
        check.setAttribute('class', 'far fa-check-square')
        edit.setAttribute('class', 'far fa-edit')
        trash.setAttribute('class', 'far fa-trash-alt')
        
        
        document.getElementById('the_list').append(ele, check, edit, trash)
        */

        document.getElementById('input_item').value = ''
    } 
}


function clearItems() {
    document.querySelectorAll('.item').forEach(e => e.remove())

    /*
    var x, i
    x = ele.querySelectorAll('.far');
    for (i = 0; i < x.length; i++) {
        x[i].remove();
    }
    */
}

function createIclasses() {
    
}