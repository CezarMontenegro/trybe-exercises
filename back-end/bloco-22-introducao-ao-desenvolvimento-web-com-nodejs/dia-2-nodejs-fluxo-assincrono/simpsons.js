const fs = require('fs').promises;

function listSimpsons() {
    fs.readFile('./simpsons.json', 'utf-8')
        .then((result) => {
            return JSON.parse(result)
        })
        .then((simpsons) => {
            return simpsons.map(({ id, name }) => `${id} - ${name}`);
        })
        .then((lines) => {return lines.forEach((line) => console.log(line))})
}

function findCharacter(chooseId) {
    fs.readFile('./simpsons.json', 'utf-8')
        .then((result) => {
            return JSON.parse(result)
        })
        .then((simpsons) => {
            return simpsons.filter(({id}) => id === chooseId)
        })
        .then((result) => {
            typeof result !== 'string' ?  console.error('id não encontrado') : console.log(`O personagem selecionado foi o ${result[0].name}`)
        })
}

function takeIdsOf() {
    fs.readFile('simpsons.json', 'utf-8')
        .then((result) => JSON.parse(result))
        .then((simpsons) => simpsons.filter((simpson) => {
            if (simpson.id !== '6' && simpson.id !== '10') {
                return simpson
            }
        }))
        .then(result => console.log(result))
}

const arrayDeSimpsons = [];

function writeJson() {
    fs.readFile('simpsons.json', 'utf-8')
        .then((result) => JSON.parse(result))
        .then((simpsons) => {
            simpsons.forEach((simpson, index) => {
                if (index < 4) {
                    arrayDeSimpsons.push(simpson)
                }
            })
            return arrayDeSimpsons
        })
        .then(result => fs.writeFile('./simpsonsFamily.json', JSON.stringify(result)))
}

writeJson()

// function changeSimpson() {
//     fs.readFile('simpsonsFamily.Json', 'utf-8')
//         .then(result => JSON.parse(result))
//         .then(simpsons => simpsons.forEach((simpson) => {
//             if (simpson.name === 'Nelson Muntz') {
//                 simpson.name = 'Maggie Simpson'
//             }
//             return simpsons
//         }))
//         .then(result => console.log(result))
// }

// changeSimpson()