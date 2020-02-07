let number = 0
let paragraph = document.getElementById('paragraph')
let submitButton = document.getElementById('submitButton')
let userInput = document.getElementById('userInput')
let topNumber
let sum
function calculateArmstrongNumbers () {
  for (let i = 0; i <= topNumber; i++) {
  // console.log(tall)
    let splittet = splitNumber(number)
    let lengde = number.toString().length
    // console.log('Lengden er: ' + lengde)
    // console.log(splittet)
    sum = 0
    for (let k = 0; k < lengde; k++) {
      let singleSum = Math.pow(splittet[k], lengde)
      sum += singleSum
    }
    if (number === sum) {
      paragraph.innerText += number + ' is an Armstrong number'
      paragraph.innerHTML += '</br>'
    }
    number++
    if (number === topNumber) {
      console.log('Done!')
    }
  }
}

function splitNumber (number) {
  return [...number + ''].map(Number)
}

submitButton.addEventListener('click', function () {
  topNumber = userInput.value
  calculateArmstrongNumbers()
})
