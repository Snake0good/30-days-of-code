function calculate() {
    const mass = document.getElementById('weight').value
    const height = (document.getElementById('height').value / 100)

	if (mass == '' || height == '') {
		window.alert("Please enter a number")
		} else {
			const bmi = mass / Math.pow(height, 2)
	    	document.getElementById('bmi').innerHTML = bmi.toFixed(1)
		} 
}
