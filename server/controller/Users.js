const {
  hashPassword,
  verifyPassword,
  createToken,
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
      const  { email , created, role, sub, sub_time, profilePhoto} = user;
      const data = {username , email , created, role, sub, sub_time, profilePhoto};
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
    }else {
      const { email, created, role, sub, sub_time, profilePhoto } = checkExistingUser;
      const token = await createToken({ username, password, email, created });

      const user = { username, email, created, role, sub, sub_time, profilePhoto };
      return { token, user, status: "SUCCESS" };
    }
  }
};

const getUserData = async({username}) =>{
  // console.log( username)
  const checkExistingUser = await User.findOne({ username });
  const { email, created , role , sub , sub_time , profilePhoto} = checkExistingUser
  return { username , email, created , role , sub , sub_time , profilePhoto}
}

module.exports = {
  CreateUser,
  UserAuthentication,
  getUserData
};
