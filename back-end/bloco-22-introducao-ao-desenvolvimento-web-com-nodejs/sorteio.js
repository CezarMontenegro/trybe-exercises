const readline = require('readline-sync')

const palpite = readline.questionInt('Qual é o seu palpite? ')
const random = Math.trunc((Math.random() * 10))

function draw() {
    if (palpite === random) {
        console.log('Parabén você ganhou!!!')
    } else {
        console.log('Você perdeu, tente de novo.')
    }
}
console.log(`O número sorteado foi ${random}.`)
draw()