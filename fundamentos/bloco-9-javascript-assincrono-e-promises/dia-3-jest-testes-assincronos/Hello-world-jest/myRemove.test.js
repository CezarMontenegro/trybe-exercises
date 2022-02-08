const myRemove = require('./myRemove');

describe('Testa funcão myRemove', () => {
  const array = [1, 2, 3, 4];
  it('Deve retornar um array com o item passado como parametro removido', () => {
    expect(myRemove(array,3)).toEqual([1, 2, 4]);
    expect(myRemove(array,3)).not.toEqual([1, 2, 3, 4]);
    expect(myRemove(array,5)).toEqual([1, 2, 3, 4]);
  });
});