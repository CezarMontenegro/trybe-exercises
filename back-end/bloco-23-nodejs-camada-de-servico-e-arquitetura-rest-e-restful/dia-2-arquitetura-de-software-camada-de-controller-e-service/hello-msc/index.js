const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const Author = require('./controllers/Authors');


app.use(bodyParser.json());

app.get('/authors', Author.getAll);

app.get('/authors/:id', Author.findById);

app.post('/authors', Author.create);


const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});