const User = require('../../src/models/user');

const setupDatabase = async () => {
  await User.query(`insert into __TABLE__ (name) values('Shiviraj');`);
};

const cleanupDatabase = async () => {
  await User.query(`delete from __TABLE__`);
};

module.exports = { setupDatabase, cleanupDatabase };
