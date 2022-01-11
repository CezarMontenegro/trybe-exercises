const readline = require('readline-sync')

const velocidade = readline.questionFloat('Qual a velocidade? ')
const tempo = readline.questionFloat('Qual o tempo? ')

console.log(`A velociade média é ${velocidade / tempo} km/h`)