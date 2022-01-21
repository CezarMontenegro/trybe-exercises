const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const port = 3001;

const Book = require('./models/Book');

app.get('/books', async (req, res) => {
  const books = await Book.getAll();

  res.status(200).json(books);
})

app.get('/books/:author_id', async (req, res) => {
  const { author_id } = req.params;

  const books = await Book.getByAuthorID(author_id);

  if (!books) return res.status(404).json({message: 'Not found'});

  res.status(200).json(books);
})

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;

  const books = await Book.getById(id)

  res.status(200).json(books);
})

app.post('/books', async (req, res) => {
  const { title, author_id } = req.body;

  if (!Book.isValid(title, author_id)) return res.status(400).json({message: 'Dados inválidos' });

  await Book.create(title,author_id);

  res.status(201).json({ message: 'Autor criado com sucesso!'})
})

app.listen(port, () => console.log(`Ouvindo na porta ${port}`));