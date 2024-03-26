const followers = document.getElementById('countDisplay')
let counter = 0

const displayCounter = () => {
  followers.innerHTML = counter
}

const alertUser = () => {
  if (counter >= 10) {
    alert(`Congratulations your page has ${counter} followers`)
  }
}

const increaseCount = () => {
  counter++
  displayCounter()
  alertUser()
}
