//Exercicio 1

const assert = require('assert');

const greetPeople = (people) => {
    let greeting = [];
  
    for (const person in people) {
      greeting.push(`Hello ${people[person]}`);
    }
    return greeting;
  };
  
  const parameter = ['Irina', 'Ashleigh', 'Elsa'];
  const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
  let greeting = greetPeople(parameter);
  assert.deepStrictEqual(greeting, result);

  //Exercicio 2

  const removeVowels = (word) => {
    const characters = word.split('');
    const results = [];
    let counter = 0;
  
    for (let index = 0; index < characters.length; index += 1) {
      if (
        characters[index] === 'a' ||
        characters[index] === 'o' ||
        characters[index] === 'i' ||
        characters[index] === 'e' ||
        characters[index] === 'u'
        ) {
            counter += 1;
            results.push(counter);
          } else {
            results.push(characters[index]);
          }
        }
        return results.join('');
    };
  
  
  const parameter2 = 'Dayane';
  const expected = 'D1y2n3';
  let results = removeVowels(parameter2);
  assert.deepStrictEqual(results, expected);

  //Exercise 3

  const greaterThanTen = (array) => {
    let results3 = [];
    for (let index = 0; index < array.length; index += 1) {
      if (array[index] > 10) {
        results3.push(array[index]);
      }
    }
    return results3;
  };
  
  const parameter3 = [4, 10, 32, 9, 21];
  const result3 = [32, 21];
  let results3 = greaterThanTen(parameter3);
  assert.deepStrictEqual(results3, result3);

  //Exercicio 4



  function secondThirdSmallest(array) {
    let results4 = []
    array.sort((a,b) => (a-b));
    results4 = [array[1], array[2]];
    return results4;
};

const parameter4 = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result4 = [5, 6];
let results4 = secondThirdSmallest(parameter4);
  assert.deepStrictEqual(results4, result4);
