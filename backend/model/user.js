const sql = require("../database/conexion");

module.exports.login = async (userData) => {
  let response = await sql.query(
    `SELECT email,nombres,fecha_nac FROM users WHERE email LIKE '${userData.email}' AND password = ('${userData.password}')`
  );
  let loginResult = (await response[0][0]) ? true : false;

  let loginResponse = {
    login: loginResult,
    data: response[0][0] ? response[0][0] : false,
  };
  return loginResponse;
};

module.exports.registro = async (userData) => {
  let reg = await sql.query(
    `INSERT INTO users (nombres, apellidos, email, password) VALUES ('${userData.nombre}', '${userData.apellido}', '${userData.email}', '${userData.password}')`
  );

  let response = await sql.query(
    `SELECT email,nombres,fecha_nac FROM users WHERE email LIKE '${userData.email}' AND password = ('${userData.password}')`
  );
  let loginResult = (await response[0][0]) ? true : false;

  let loginResponse = {
    login: loginResult,
    data: response[0][0] ? response[0][0] : false,
  };
  return loginResponse;
};
