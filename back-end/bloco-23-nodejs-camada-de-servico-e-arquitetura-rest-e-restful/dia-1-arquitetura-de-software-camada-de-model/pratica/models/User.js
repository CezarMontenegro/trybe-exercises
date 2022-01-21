const connection = require('./connection');

const isUserValid = (firstName, lastName, email, password) => {
  if ([firstName, lastName, email, password].some((i) => i === !i)) return false
  if (password.length < 3 ) return false

  return true
}

const createUser = (firstName, lastName, email, password) => {
  connection.execute(
    'INSERTO INTO model_example.users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)',
    [firstName, lastName, email, password]
  )
}

module.exports = {
  isUserValid,
  createUser,
}