const connection = require('./connection');

const isUserValid = (firstName, lastName, email, password) => {
  if ([firstName, lastName, email, password].some(i => i === !i)) return false;
  if (password < 3) return false;

  return true;
};

const createUser = async (firstName, lastName, email, password) => {
  connection.execute(
    'INSERT INTO model_example.users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)',
    [firstName, lastName, email, password]
  )
};

const getAll = async () => {
  const [users] = await connection.execute(
    'SELECT * FROM model_example.users;'
  )

  return users;
}

module.exports = {
  isUserValid,
  createUser,
  getAll,
}