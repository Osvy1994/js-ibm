const userTextArea = document.getElementById('userInput')
const startBtn = document.getElementById('startBtn')
const endBtn = document.getElementById('endBtn')
const info = document.getElementById('info')

let testText = 'The quick brown fox'
let timerOn
let timer = 0

function startTest() {
  document.getElementById('inputText').value = testText
  document.getElementById('output').innerHTML = ''
  timer = 0
  timerOn = setInterval(() => {
    timer++
    console.log(timer)
  }, 1000)
  startBtn.disabled = true
  endBtn.disabled = false
}

function endTest() {
  const userTypedText = userTextArea.value
  if (userTypedText != testText) {
    console.log('The text does not match. Timer Running')
    document.getElementById('info').innerText = 'The text does not match'
  } else {
    clearInterval(timerOn)
    document.getElementById('timeResult').innerText = `Time: ${timer}`
    const wordsCount = userTypedText.split(' ').length
    console.log(wordsCount)
    document.getElementById('wordsCount').innerText = `Words: ${wordsCount}`
    const wordsPerMinute = Math.round((60 * wordsCount) / timer)
    document.getElementById('wordsPerMinute').innerText =
      `Words per Minute: ${wordsPerMinute}`
    startBtn.disabled = false
    endBtn.disabled = true
  }
}

function restartTest() {
  timer = 0
  userTextArea.value = ''
  testText = ''
  clearInterval(timerOn)
}

userTextArea.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault()
    endTest()
  }
})
