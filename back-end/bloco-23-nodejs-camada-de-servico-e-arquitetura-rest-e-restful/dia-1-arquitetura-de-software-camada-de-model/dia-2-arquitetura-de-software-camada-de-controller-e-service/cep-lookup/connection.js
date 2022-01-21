const mysql = require('mysql2');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '390287',
  database: 'cep_lookup'
})

module.exports = connection;