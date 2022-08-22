// gerando um número randômico entre 0 e 10

let randomNumber = Math.round(Math.random() * 10)

// variável de controle do número de tentativas

let xAttempts = 1

// variáveis dos elementos utilizados

const screenOne = document.querySelector('.screen1')

const screenTwo = document.querySelector('.screen2')

const btnTry = document.querySelector('#btnTry')

const btnReset = document.querySelector('#btnReset')

document.addEventListener('keydown', function (e) {
  const isEnterKey = e.key == 'Enter'

  const isOneHide = screenOne.classList.contains('hide')

  if (isEnterKey && isOneHide) {
    handleResetClick()
  }
})

// eventos

btnTry.addEventListener('click', handleTryClick)

btnReset.addEventListener('click', handleResetClick)

// funções

function getRandomNumber() {
  randomNumber = Math.round(Math.random() * 10)
  return randomNumber
}

function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector('#inputNumber')

  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen()

    screenTwo.querySelector(
      'h2'
    ).innerText = `Acertou em ${xAttempts} tentativas`
  }

  inputNumber.value = ''

  xAttempts++
}

function handleResetClick() {
  toggleScreen()

  getRandomNumber()

  xAttempts = 1
}

function toggleScreen() {
  screenOne.classList.toggle('hide')

  screenTwo.classList.toggle('hide')
}
