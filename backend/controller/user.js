const userModel = require("../model/user");
const jwt = require("jsonwebtoken");

module.exports.loginUser = async (userData) => {
  let response = await userModel.login(userData);
  if (response.login) {
    return { token: await jwt.sign(response.data, "MaIsGa") };
  }
  return { error: "Usuaria(o) o contraseña incorrectos" };
};

module.exports.registroUser = async (userData) => {
  let response = await userModel.registro(userData);
  if (response.login) {
    return { token: await jwt.sign(response.data, "MaIsGa") };
  }
  return { error: "Usuaria(o) o contraseña incorrectos" };
};