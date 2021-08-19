const myFizzBuzz = require('./myFizzBuzz');

describe('myFizzBuzz', () => {
  it('Verfiy if a number is divisible by 3 and 5', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
  });

  it('Verify if a number is divisible by 3', () => {
    expect(myFizzBuzz(6)).toEqual('fizz');
  });

  it('Verify if a number is divisible by 5', () => {
    expect(myFizzBuzz(10)).toEqual('buzz');
  });

  it('Verify if a number is not divisible by either 3 or 5', () => {
    expect(myFizzBuzz(7)).toEqual(7);
  });

  it('Verify if a number is not a number', () => {
    expect(myFizzBuzz('xulambs')).toEqual(false);
  });
})
// Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
// Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
// Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
// Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
// Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado