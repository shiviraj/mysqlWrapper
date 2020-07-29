const mysql = require('mysql');
const { promisify } = require('./promisify');

const createDatabase = function (options, dbName) {
  const con = mysql.createConnection(options);
  con.connect();
  con.query = promisify(con.query.bind(con));
  con.query(`create database if not exists ${dbName}`);
  con.end();
};

module.exports = { createDatabase };
