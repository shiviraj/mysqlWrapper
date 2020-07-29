const mysql = require('mysql');
const { createDatabase } = require('./utils.js');
const { promisify } = require('./promisify.js');

let con;

class Schema {
  constructor(createSchemaQuery) {
    this.schemaQuery = createSchemaQuery;
  }
}

class Wrapper {
  connect(options) {
    this.dbName = options.database;
    return new Promise((resolve, reject) => {
      delete options.database;
      createDatabase(options, this.dbName);
      con = mysql.createConnection(
        Object.assign(options, { database: this.dbName })
      );
      con.connect((err) => {
        if (err) return reject(err);
        resolve();
      });
    });
  }
  model(schema, tableName) {
    return new Query(con, schema.schemaQuery, tableName);
  }
}

class Query {
  constructor(con, schema, tableName) {
    this.con = con;
    this.con.query = promisify(con.query.bind(con));
    this.tableName = tableName;
    this.query(schema);
  }
  query(...params) {
    params[0] = params[0].replace(/__TABLE__/g, this.tableName);
    return this.con.query(...params);
  }
}

module.exports = new Wrapper();
module.exports.Schema = Schema;
