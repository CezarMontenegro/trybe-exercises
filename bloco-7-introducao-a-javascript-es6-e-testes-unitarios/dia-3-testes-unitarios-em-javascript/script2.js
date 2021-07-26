// Exercicio   2.1

const assert6 = require('assert');
// escreva a função addOne aqui

function addOne(array) {
    const output = [];
    for(let index = 0; index < array.length; index += 1){
      output.push(array[index] + 1);
    }
    return output;
}


const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert6.strictEqual(typeof addOne, 'function');
assert6.deepStrictEqual(output, expected);
assert6.deepStrictEqual(myArray, unchanged);


//Exercicio 2.2

const assert7 = require('assert');
// escreva a função wordLengths aqui

function wordLengths(array) {
    let output2 = [];
    for (let index = 0; index < array.length; index += 1) {
      output2.push(array[index].length);
    }
    return output2;
  };

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected2 = [3, 6, 10, 5];

assert7.strictEqual(typeof wordLengths, 'function');
const output2 = wordLengths(words);
assert7.deepStrictEqual(output2, expected2);

//Exercicio 2.3

const assert8 = require('assert');
// escreva a função sumAllNumbers aqui

function sumAllNumbers(array){
    let output3 = 0;
    for(let index = 0; index < array.length; index +=1){
        output3 += array[index];
    }
    return output3;
};

const numbers = [9, 23, 10, 3, 8];
const expected3 = 53;
const output3 = sumAllNumbers(numbers);

assert8.strictEqual(typeof sumAllNumbers, 'function');
assert8.strictEqual(output3, expected3);

//Exercicio 2.4

const assert9 = require('assert');
// escreva a função findTheNeedle aqui

function findTheNeedle(array, word){
    let output4 = -1
    for(let index = 0; index < array.length; index +=1){
        if(word === array[index]){
            output4 = index;
        }
    }
    return output4;
}

let words2 = ['house', 'train', 'slide', 'needle', 'book'];
let expected4 = 3;
let output4 = findTheNeedle(words2, 'needle');
assert9.strictEqual(output4, expected4);

words2 = ['plant', 'shelf', 'arrow', 'bird'];
expected4 = 0;
output4 = findTheNeedle(words2, 'plant');
assert9.strictEqual(output4, expected4);

words2 = ['plant', 'shelf', 'arrow', 'bird'];
expected4 = -1;
output4 = findTheNeedle(words2, 'plat');
assert9.strictEqual(output4, expected4);






