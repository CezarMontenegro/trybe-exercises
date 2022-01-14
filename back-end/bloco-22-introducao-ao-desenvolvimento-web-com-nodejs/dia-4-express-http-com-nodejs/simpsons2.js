const express = require('express');
const bodyParser = require('body-parser');
const simpsonsUtils = require('./fs-utils');
const rescue = require('express-rescue');

const app = express();
app.use(bodyParser.json());

app.get('/simpsons', rescue(async (req, res) => {
    const simpsons = await simpsonsUtils.getSimpsons();
    res.status(200).json(simpsons);
}));

app.listen(3001, console.log('Escutando na porta 3001'));
