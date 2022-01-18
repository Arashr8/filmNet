const { hashPassword } = require("../middleware/authentication");
const User = require("../model/user");

const CreateUser = async ({ username, password, email }) => {
  const checkExistingUser = User.find({ username });

  if (checkExistingUser.length > 0) {
    return { error: "Invalid username!", status: "ERROR" };
  } else {
    const newPassword = await hashPassword(password)

    const values = { username, password:newPassword, email };

    try {
      const user = await User.create(values);
      return user;
    } catch (err) {
      throw err;
    }
  }
};

module.exports = {
  CreateUser,
};
