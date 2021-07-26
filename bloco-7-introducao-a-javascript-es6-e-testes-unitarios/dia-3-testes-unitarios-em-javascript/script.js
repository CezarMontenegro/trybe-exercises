//Exercicio 1

const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
assert.strictEqual(sum(4,5), 9, 'Não é 9');
assert.strictEqual(sum(0,0), 0, 'Não é 0');
//assert.strictEqual(sum(4,'5'), 9, 'Não é 9');


//Exercicio2

const assert2 = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui
let teste2 =[1, 2, 3, 4];
assert2.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4],'teste 2.1');
assert2.notStrictEqual(myRemove([1,2,3,4], 3), [1,2,3,4], 'teste 2.2');
assert2.notStrictEqual(myRemove(teste2, 3),teste2,'teste 2.3');
assert2.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4],'teste 2.4');


//Exercicio3

const assert3 = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

//implemente seus testes aqui

let teste = [1, 2, 3 ,4];

assert3.deepStrictEqual(myRemoveWithoutCopy(teste, 3),[1, 2, 4], 'teste 3.1');
assert3.notStrictEqual(myRemoveWithoutCopy(teste, 3),[1, 2, 3, 4], 'teste 3.2');
assert3.deepStrictEqual(myRemoveWithoutCopy(teste, 3), teste,'teste 3.3');
assert3.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4]);

//Exercicio 4

const assert4 = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui

assert4.deepStrictEqual(myFizzBuzz(15),'fizzbuzz', 'teste 4.1');
assert4.deepStrictEqual(myFizzBuzz(6),'fizz', 'teste 4.2');
assert4.deepStrictEqual(myFizzBuzz(10),'buzz', 'teste 4.3');
assert4.deepStrictEqual(myFizzBuzz(7),7, 'teste 4.4');
assert4.deepStrictEqual(myFizzBuzz('N'),false, 'teste 4.4');


//Exercicio 5

const assert5 = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// implemente seus testes aqui

assert5.deepStrictEqual(obj1, obj2, 'teste 5.1');
assert5.notStrictEqual(obj1,obj3, 'teste 5.2');
assert5.notStrictEqual(obj2, obj3, 'teste 5.3');

