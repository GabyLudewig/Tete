const sql = require("../database/conexion");

module.exports.login = async (userData) => {
  let response = await sql.query(
    `SELECT * FROM users WHERE email LIKE '${userData.email}' AND password = MD5('${userData.password}')`
  );
  let loginResult = (await response[0][0]) ? true : false;

  let loginResponse = {
    login: loginResult,
    data: response[0][0] ? response[0][0] : false,
  };
  return loginResponse;
};

module.exports.registro = async (userData) => {

try{
  let validaRegistro= await sql.query(
    `SELECT * FROM users WHERE email = '${userData.email}'`)
    if (!validaRegistro[0][0]) {
    
  let reg = await sql.query(
    `INSERT INTO users (nombres, apellidos, email, password) VALUES ('${userData.nombre}', '${userData.apellido}', '${userData.email}', MD5('${userData.password}'))`
  );

  let response = await sql.query(
    `SELECT * FROM users WHERE email LIKE '${userData.email}' AND password = MD5('${userData.password}')`
  );
  let loginResult = (await response[0][0]) ? true : false;

  let loginResponse = {
    login: loginResult,
    data: response[0][0] ? response[0][0] : false,
  };
  return loginResponse;
}else {
  console.log("Usuario ya registrado")
  return { loginResult: 'error' }
}
}catch (error) {
  console.log("Error en modelo")
  throw new Error(error)
}
};

module.exports.buscarUsuario = async (tecler) => {
  try{
    const words = tecler.tecler.split (" ")
  let res = []
  for(let i = 0; i<words.length; i++ ){
      let word = await sql.query(`SELECT * FROM users WHERE nombres LIKE '%${words[i]}%' OR apellidos LIKE '%${words[i]}%'`)
      res.push(word)
    }
    return {res,words,tecler }
  }catch (error) {
    console.log("Error en modelo")
    throw new Error(error)
  }
  };

  module.exports.buscarPerfilUsuario = async (id) => {
    let res = await sql.query(
      `SELECT * FROM users WHERE id = '${id.id}' `)
    return { res }
  }
  