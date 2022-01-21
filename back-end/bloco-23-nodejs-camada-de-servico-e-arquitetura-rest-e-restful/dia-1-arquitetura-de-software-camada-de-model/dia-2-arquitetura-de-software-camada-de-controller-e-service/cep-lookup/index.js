const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/ping', async (req, res) => {
  res.status(200).json({message: 'pong!'})
})

app.get('/cep/:cep', async (req, res) => {
  
});

app.listen(3000, () => console.log('Ouvindo na porta 3000'));