function addPerson() {
    var newName = document.getElementById('name').value
    var dept = document.getElementById('dept').value
    var salary = document.getElementById('salary').value
    var table = document.getElementById('newTable')

    if ((newName === '') || (isNaN(salary) == true) || (dept === '')) {

    } else {
        var row = table.insertRow(2)
        var cell1 = row.insertCell(0)
        var cell2 = row.insertCell(1)
        var cell3 = row.insertCell(2)
        var cell4 = row.insertCell(3)
    
        cell1.innerHTML = newName
        cell2.innerHTML = dept
        cell3.innerHTML = salary
        cell4.innerHTML = 'Delete'

        document.getElementById('name').value = ''
        document.getElementById('salary').value = ''
        document.getElementById('dept').value = ''
    }


    
}