// gerando um número randômico entre 0 e 10

let randomNumber = Math.round(Math.random() * 10)

// variável de controle do número de tentativas

let xAttempts = 1

// variáveis dos elementos utilizados

const screenOne = document.querySelector('.screen1')

const screenTwo = document.querySelector('.screen2')

const btnTry = document.querySelector('#btnTry')

const btnReset = document.querySelector('#btnReset')

// Capturando e reagindo ao clique da tecla ENTER

document.addEventListener('keydown', function (e) {
  const isEnterKey = e.key == 'Enter'

  const isOneHide = screenOne.classList.contains('hide')

  if (isEnterKey && isOneHide) {
    handleResetClick()
  }
})

/* ADICIONANDO VARIÁVEIS DE ALERTA */

const alerting = document.querySelector('.alerting')

const lastResults = document.querySelector('.lastResults')

const triedNumbers = lastResults.querySelector('span')

// refatorando um elemento utilizado repetidas vezes

const screenTwoText = screenTwo.querySelector('h2'

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
  
  /* ADICIONANDO VARIÁVEIS CONDICIONAIS NO ESCOPO DA FUNÇÃO */

  const removeClassHide = alerting.classList.remove('hide')

  const notANumber = !inputNumber.value

  const isInvalidNumber = inputNumber.value < 0 || inputNumber.value > 10

  const isLowerNumber = inputNumber.value < randomNumber

  const isHigherNumber = inputNumber.value > randomNumber
  
  /* ADICIONANDO CONDIÇÕES */

  if (notANumber) {
    alerting.innerText = `Tente um número!`

    console.log('Sem número')

    return removeClassHide
  }

  if (isInvalidNumber) {
    alerting.innerText = `Tente um número válido!`

    inputNumber.value = ''

    console.log('Número inválido')

    return removeClassHide
  }

  if (isLowerNumber) {
    alerting.innerText = `Número tentado foi baixo!
    Tente novamente!`

    lastResults.classList.remove('hide')

    removeClassHide

    triedNumbers.textContent += `${inputNumber.value} `

    console.log('Número baixo')
  }

  if (isHigherNumber) {
    alerting.innerText = `Número tentatdo foi alto!
    Tente novamente!`

    lastResults.classList.remove('hide')

    removeClassHide

    triedNumbers.textContent += `${inputNumber.value} `

    console.log('Número alto')
  }
  
  /* ADICIONANDO CONDICIONAL DE GAME OVER */

  if (inputNumber.value != randomNumber && xAttempts == 5) {
    toggleScreen()

    screenTwoText.innerText = `GAME OVER!`

    console.log('Máximo de tentativas')
  }
  
  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen()

    /* ADICIONANDO TEXTO ALTERNATIVO PARA ACERTO EM UMA TENTATIVA E REFATORANDO */

    if (xAttempts > 1) {
      screenTwoText.innerText = `Acertou em ${xAttempts} tentativas`
    } else {
      screenTwoText.innerText = `Acertou em ${xAttempts} tentativa!`
    }
  }

  inputNumber.value = ''

  xAttempts++
}

function handleResetClick() {
  toggleScreen()

  /* ADICIONANDO RESET DE NOVOS ELEMENTOS */

  alerting.classList.add('hide')

  lastResults.classList.add('hide')

  triedNumbers.innerText = ''
  
  getRandomNumber()

  xAttempts = 1
}

function toggleScreen() {
  screenOne.classList.toggle('hide')

  screenTwo.classList.toggle('hide')
}
