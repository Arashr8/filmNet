const { hashPassword } = require("../middleware/authentication");
const User = require("../model/user");

const CreateUser = async ({ username, password, email }) => {
  const checkExistingUser = await User.find({ username });
    
  if (checkExistingUser.length > 0) {
    return { error: "Username is already in use!", status: "ERROR" };
  } else {
    const newPassword = await hashPassword(password)

    const values = { username, password:newPassword, email };

    try {
      const user = await User.create(values);
      return {data:user , status:"SUCCESS"};
    } catch (err) {
      throw err;
    }
  }
};

module.exports = {
  CreateUser,
};
