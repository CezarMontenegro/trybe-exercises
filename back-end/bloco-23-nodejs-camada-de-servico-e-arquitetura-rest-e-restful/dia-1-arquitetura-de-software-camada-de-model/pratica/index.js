const express = require('express');
const bodyParser = require('body-parser');

const { isUserValid, createUser, getAll } = require('./models/User');

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

  res.status(201).json({
    "id": 1,
    "firstName": "Calebe",
    "lastName": "Junior",
    "email": "calebe.junior@gmail.com"
  })

})

app.get('/user', async (_req, res) => {
  const users = await getAll();

  res.status(200).json(users);
})

app.listen(3002, () => console.log('Escutando na porta 3002'));

