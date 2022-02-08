const sum = require('./sum');

describe('A função sum(a,b) retorna a soma do parâmetro a com o b', () => {
  it('Deveria retornar a soma de dois parâmetros', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
  });

  it('Deveria retornar um erro quando os parâmetros são 4 e "5"', () => {
    expect(() => sum(4, '5')).toThrowError();
    expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
  });
});