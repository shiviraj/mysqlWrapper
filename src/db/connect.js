const wrapper = require('../wrapper/mysql');

wrapper.connect({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: process.env.DB_NAME,
});
