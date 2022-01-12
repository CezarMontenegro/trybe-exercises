function testPromise(a, b, c) {
    const promise = new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
            reject(new Error('Informe apenas números'))
            return
        }
        const result = (a + b) * c;
        if (result < 50) {
            reject('Valor muito baixo')
            return
        }
        resolve(result)
    })
    return promise 
}

// function consumeTestPromise() {
//     a = Math.floor(Math.random() * 100 + 1);
//     b = Math.floor(Math.random() * 100 + 1);
//     c = Math.floor(Math.random() * 100 + 1);

//     testPromise(a,b,c)
//         .then(result => console.log(result))
//         .catch(err => console.error(err.message))
// }

async function consumeTestPromise() {
    a = Math.floor(Math.random() * 100 + 1);
    b = Math.floor(Math.random() * 100 + 1);
    c = Math.floor(Math.random() * 100 + 1);

    try {
        const result = await testPromise(a, b, c);
        console.log(result);
    } catch {
        console.error(err);
    }
    
}

consumeTestPromise()


