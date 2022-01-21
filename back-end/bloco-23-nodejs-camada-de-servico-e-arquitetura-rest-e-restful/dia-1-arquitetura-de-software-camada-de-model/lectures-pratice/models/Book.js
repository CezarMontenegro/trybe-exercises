const connection = require('./connection');

const serialize = (bookData) => {
  return {
    id: bookData.id,
    title: bookData.title,
    authorId: bookData.author_id
  }
}

const getAll = async () => {
  const [books] = await connection.execute('SELECT id, title, author_id FROM books');

  return books;
}

const getByAuthorID = async (author_id) => {
  const [bookData] = await connection.execute(
    'SELECT id, title, author_id FROM books WHERE author_id=?',
    [author_id]
  );

  if (bookData.length === 0) return null; 

  const serialized = bookData.map((book) => serialize(book));

  return serialized;
}

const getById = async (id) => {
  const [bookData] = await connection.execute(
    'SELECT id, title, author_id FROM books WHERE id=?',
    [id]
  );

  if (bookData.length === 0) return null;

  const serialized = bookData.map(book => serialized(book));

  return serialized
}

const isValid = (title, author_id) => {
  if (!title || title.length < 3) return false;
  if (!author_id || author_id === null) return false;

  return true;
}

const create = async (title, author_id) => connection.execute(
     'INSERT INTO model_example.books (title, author_id) VALUES (?, ?)',
     [title, author_id]
);

module.exports = {
  getAll,
  getByAuthorID,
  getById,
  isValid,
  create,
};