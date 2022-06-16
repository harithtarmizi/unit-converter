const theNumberInput = document.getElementById('the-number-input')
let theNumber = theNumberInput.value
const theNumberAll = document.querySelectorAll('.the-number')

// Grab each span element that will show a converted amount
const convMetersToFeet = document.getElementById('conv-meters-feet')
const convFeetToMeters = document.getElementById('conv-feet-meters')
const convLitersToGals = document.getElementById('conv-liters-gal')
const convGalsToLiters = document.getElementById('conv-gal-liters')
const convKiloToPounds = document.getElementById('conv-kilo-pounds')
const convPoundsToKilo = document.getElementById('conv-pounds-kilo')

theNumberInput.addEventListener("input", function() {

	// If there is a value in the input, make theNumber equal to it
	//  Otherwise theNumber is remain unchange
	theNumberInput.value ? theNumber = theNumberInput.value : theNumber = 0

	// Insert THE NUMBER to the text content of each element with class .the-number
	for (const element of theNumberAll) {
		element.textContent = theNumber
	}

	// Conversion calculations to nearest 3 decimal places
	convMetersToFeet.textContent = (theNumber * 3.28084).toFixed(3)
	convFeetToMeters.textContent = (theNumber * 0.3048).toFixed(3)
	convLitersToGals.textContent = (theNumber * 0.2641722).toFixed(3)
	convGalsToLiters.textContent = (theNumber * 3.7854096).toFixed(3)
	convKiloToPounds.textContent = (theNumber * 2.20462262185).toFixed(3)
	convPoundsToKilo.textContent = (theNumber * 0.45359237).toFixed(3)
})