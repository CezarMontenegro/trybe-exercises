const readline = require('readline-sync');

const peso = readline.questionFloat('Qual é o seu peso? ');
const altura = readline.questionFloat('Qual é a sua altura? ');


function findSituation(imc) {
    if (imc < 18.5) {console.log('Abaixo do peso (magreza)')}
    else if (imc >= 18.5 && imc < 25) {console.log('Peso normal')}
    else if (imc >= 25 && imc < 30) {console.log('Acima do peso (sobrepeso)')}
    else if (imc >= 30 && imc < 35) {console.log('Obesidade grau I')}
    else if (imc >= 35 && imc < 40) {console.log('Obesidade grau II')}
    else {console.log('Obesidade graus III e IV')}
}

function calcImc() {
    imc = peso / (altura ** 2);
    console.log(`Seu IMC é ${imc}.`)
    findSituation(imc)
}

calcImc()