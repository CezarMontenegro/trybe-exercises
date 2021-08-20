const {encode, decode} = require('./encodeDecode.js');

describe('Testa a função encode decode', () => {
  it('encode é uma função', () => {
    expect(typeof encode).toEqual('function');
  });
  it('decode é uma função', () => {
    expect(typeof decode).toEqual('function');
  });
  it('encode funciona', () => {
    expect(encode('aeiou')).toEqual('12345');
  });
  it('decode funciona', () => {
    expect(decode('12345')).toEqual('aeiou');
  });
  it('encode funciona 2', () => {
    expect(encode('bcdfg')).toEqual('bcdfg');
  });
  it('decode funciona 2', () => {
    expect(decode('bcdfg')).toEqual('bcdfg');
  });
  it('encode funciona 3', () => {
    expect(encode('aeiou').length).toEqual(('12345').length);
  });
  it('decode funciona 3', () => {
    expect(decode('12345').length).toEqual(('aeiou').length);
  });
})

// Teste se encode e decode são funções;

// Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;

// Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente;

// Teste se as demais letras/números não são convertidos para cada caso;

// Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.
