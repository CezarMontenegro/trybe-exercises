const express = require('express');
const bodyParser = require('body-parser');

const { isUserValid, createUser } = require('./models/')

const app = express();
app.use(bodyParser.json());

app.post('/user', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;


})

app.listen(3002, () => console.log('Escutando na porta 3002'));

