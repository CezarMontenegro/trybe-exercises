const testingScope = (escopo) => (escopo===true)? `Não devo ser utilizada fora do meu escopo (if) ótimo, fui utilizada no escopo !`:`Não devo ser utilizada fora meu escopo (else)`;
console.log(testingScope(true));

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
console.log(`${oddsAndEvens.sort((a, b) => b - a )}`);

const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial(5));

const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];
console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));

const array = ["Android", "iOS", "Architecture", "Teach", "Run"];

function buildSkillsPhrase (paramOne) {
    const fun1 = paramInner => (
      `Tryber ${paramInner} aqui!

      Tudo bem?`
    );

    let result = `${fun1(paramOne)}

    Minhas cinco principais habilidades são:`;

    array.forEach((skill, index) =>
    result = `${result}

    - ${skill}`);

    result = `
{result}

    #goTrybe
    `;

    return result;
}

console.log(buildSkillsPhrase("Lucas"));