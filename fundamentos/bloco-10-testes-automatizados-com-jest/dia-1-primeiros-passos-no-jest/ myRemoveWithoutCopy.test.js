const myRemoveWithoutCopy = require('./ myRemoveWithoutCopy');

describe('myRemoveWithoutCopy', () => {
    it('verify the call remove', () => {
      expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
    });
    
    it('Verify Error', () => {
      expect(myRemoveWithoutCopy([1, 2, 3, 4],3)).not.toEqual([1, 2, 3, 4])
    });
    
    it('Verify Error', () => {
      expect(myRemoveWithoutCopy([1, 2, 3, 4],3)).not.toEqual([1, 2, 3, 4])
    });
})

// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado