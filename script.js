
const result = document.querySelector('#result')
const humanScore = document.querySelector('#humanScore')
const computadorScore = document.querySelector('#computadorScore')


const playHuman = (humanChoice) => {
    
    playTheGame(humanChoice, playMachine())
}
const playMachine = () => {
    const choices = ['rock', 'paper','scissors']
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]
}
const playTheGame = (humano, machine) => {

    console.log ('humano ' + humano + ' maquina ' + machine)

    if (humano === machine) {
        result.innerHTML = 'Empate'
    } else if (humano === 'rock' && machine === 'paper') {
        result.innerHTML = 'Computador venceu'
    } else if (humano === 'rock' && machine === 'scissors') {
        result.innerHTML = 'Humano venceu'
    } else if (humano === 'paper' && machine === 'scissors') {
        result.innerHTML = 'Computador venceu'
    } else if (humano === 'paper' && machine === 'rock') {
        result.innerHTML = 'Humano venceu'
    } else if (humano === 'scissors' && machine === 'rock') {
        result.innerHTML = 'Computador venceu'
    } else if (humano === 'scissors' && machine === 'paper') {
        result.innerHTML = 'Humano venceu'
    }

    if (result.innerHTML === 'Humano venceu') {
        humanScore.innerHTML = parseInt(humanScore.innerHTML) + 1
    } else if (result.innerHTML === 'Computador venceu') {
        computadorScore.innerHTML = parseInt(computadorScore.innerHTML) + 1
    }
    if (humanScore.innerHTML === '7') {
        result.innerHTML = 'você venceu o jogo'
        result.style.color = 'green'
    } else if (computadorScore.innerHTML === '7') {
        result.innerHTML = 'Computador venceu o jogo'
        result.style.color = 'red'
    }   
}