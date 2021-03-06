const express = require("express");
const app = express();
const port = 3000;

const Author = require('./models/Author');

app.get('/authors', async (req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;

  const author = await Author.findById(id);

  if (!author) res.status(404).json({message: 'Not Found' });

  res.status(200).json(author);
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));