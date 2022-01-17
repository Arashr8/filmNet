const User = require("../model/user");

const CreateUser = async ({ username, password, email }) => {
  const values = { username, password, email };
  try {
    const user = await User.create(values);
    return user;
  } catch (err) {
    throw err;
  }
};

module.exports = {
    CreateUser
}