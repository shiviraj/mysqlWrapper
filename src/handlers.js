const User = require('./models/user');

const addUser = async (req, res) => {
  await User.query(
    `insert into __TABLE__ (name) values('${req.params.name}');`
  );
  res.send('successfully updated');
};
const serveUser = async (req, res) => {
  const user = await User.query(
    `select * from __TABLE__ where id = '${req.params.id}';`
  );
  res.send(user);
};

module.exports = { addUser, serveUser };
