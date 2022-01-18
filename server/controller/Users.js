const {
  hashPassword,
  verifyPassword,
} = require("../middleware/authentication");
const User = require("../model/user");

const CreateUser = async ({ username, password, email }) => {
  const checkExistingUser = await User.find({ username });

  if (checkExistingUser.length > 0) {
    return { error: "Username is already in use", status: "ERROR" };
  } else {
    const newPassword = await hashPassword(password);

    const values = { username, password:newPassword, email };

    try {
      const user = await User.create(values);
      const  { email , created} = checkExistingUser
      const data = {username , email , created};
      return { data, status: "SUCCESS" };
    } catch (err) {
      throw err;
    }
  }
};

const UserAuthentication = async ({ username, password }) => {
  const checkExistingUser = await User.findOne({ username });

  if (!checkExistingUser) {
    return {
      error: "Username or password is not valid",
      status: "ERROR",
    };
  } else {
    const hashPassword = checkExistingUser.password;
    const checkPassword = await verifyPassword(password, hashPassword);

    if (!checkPassword) {
      return {
        error: "Username or password is not valid",
        status: "ERROR",
      };
    }else{
        const  { email , created} = checkExistingUser
        const data = {username , email , created}
        return { data, status: "SUCCESS" };
    }
  }
};

module.exports = {
  CreateUser,
  UserAuthentication,
};
