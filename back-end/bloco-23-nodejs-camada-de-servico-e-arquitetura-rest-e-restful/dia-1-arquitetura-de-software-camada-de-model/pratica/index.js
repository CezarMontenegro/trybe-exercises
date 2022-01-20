const express = require('express');
const bodyParser = require('body-parser');

const { isUserValid, createUser } = require('./models/User');

const app = express();
app.use(bodyParser.json());

app.post('/user', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if(!isUserValid(firstName, lastName, email, password)) {
    return res.status(400).json({
      "error": true,
      "message": "O campo 'password' deve ter pelo menos 6 caracteres"
    });
  }

  await createUser(firstName, lastName, email, password); 

  res.status(201).json({ message: 'Autor criado com sucesso'})
})

app.listen(3002, () => console.log('Escutando na porta 3002'));

