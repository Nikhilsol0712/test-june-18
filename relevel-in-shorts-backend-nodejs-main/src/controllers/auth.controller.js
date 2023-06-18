//import user model here
const User = require("../models/user.model");

const createNewUser = async (data) => {
  try {
    const userObj = {
      name: data.name,
      email: data.email,
      password: data.password,
      userName: data.userName,
      role: data.role,
      gender: data.gender,
      DateofBirth: data.DateofBirth,
    };

    const newUser = await User.create(userObj);
    return newUser;
  } catch (err) {
    console.log("error:", err);
    return err.message;
  }
};

const register = async (req, res) => {
  try {
    const result = await createNewUser(req.body);
    let statusCode;
    let response;
    if (result.error) {
      statusCode = 403;
      response = result;
    } else {
      statusCode = 201;
      response = result;
    }
    res.status(statusCode).send({
      result: response,
    });
  } catch (err) {
    res.status(500).send({
      result: err,
    });
  }
};

const login = (req, res) => {
  //login api logic here
};

const AuthController = {
  register,
  login,
};

module.exports = AuthController;
