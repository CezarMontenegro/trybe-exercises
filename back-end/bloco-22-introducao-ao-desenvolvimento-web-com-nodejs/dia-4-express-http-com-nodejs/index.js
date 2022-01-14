const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/ping', (req, res) => res.json({ "message": 'Pong' }))

app.post('/hello', (req, res) => {
    const { name } = req.body; 
    res.json({ "message": `Hello, ${name}!` })
})

app.post('/greetings', (req, res) => {
    const { name, age } = req.body;

    age > 17 ? res.status(200).json({ "message": `Hello, ${name}!`}) :
        res.status(401).json({ "message": "Unauthorized"})
})

app.put('/users/:name/:age', (req, res) => {
    const { name, age } = req.params;
    res.json({"message": `Seu nome é ${name} e você tem ${age} anos de idade`})
})

app.get('/simpsons', (req, res) => {
    res.json({"message": 'simpsons'});
});

app.listen(3001, () => console.log('ouvindo na porta 3001!'));