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
    let results = [];
  
    for (let index = 0; index < characters.length; index += 1) {
      if (
        characters[index] !== 'a' ||
        characters[index] !== 'o' ||
        characters[index] !== 'i' ||
        characters[index] !== 'e' ||
        characters[index] !== 'u'
      ) {
        results += (`${characters[index]}`);
      } 
        
      
    }
    return results;
  };
  
  
  const parameter2 = 'Dayane';
  const expected = 'D1y2n3';
  let results = removeVowels(parameter2);
  assert.deepStrictEqual(results, expected);

