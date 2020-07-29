const wrapper = require('../wrapper/mysql');

const userSchema = new wrapper.Schema(`create table if not exists __TABLE__(
  id int primary key auto_increment,
  name varchar(255)not null
)`);

const User = wrapper.model(userSchema, 'users');

module.exports = User;
