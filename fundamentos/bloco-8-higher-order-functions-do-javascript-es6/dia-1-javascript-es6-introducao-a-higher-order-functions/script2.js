// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const checkResult = (numero, numeroSorteio) => numero === numeroSorteio;

function hof(numero, funcao) {
  const numeroSorteio = () => Math.trunc((Math.random()*5)+1);
  if(funcao === true){
      return "Parabéns você ganhou";
  }
  return "Tente novamente";
}
console.log(hof(3, checkResult));
