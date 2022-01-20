const mysql2 = require('mysql2/promise');

const connection = mysql2.createPool({
  user: 'root',
  host: 'localhost',
  password: '390287',
  database: 'model_example'
})