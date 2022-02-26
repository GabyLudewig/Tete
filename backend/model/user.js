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
    `INSERT INTO users (nombres, apellidos, email, ciudad, pais, estudios, idiomas, conocimientos_extra, linkedin, hobbies, fecha_nac, password) VALUES ('${userData.nombre}', '${userData.apellido}', '${userData.email}', '${userData.ciudad}', '${userData.pais}', '${userData.estudios}', '${userData.idiomas}', 
    '${userData.conocimientos_extra}', '${userData.linkedin}', '${userData.hobbies}', '${userData.fecha_nac}',
    MD5('${userData.password}'))`
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
  
  module.exports.perfil = async (id) => {
    let resCur = await sql.query(
         `SELECT * FROM cursos WHERE id_user_curso = '${id.id}'` )
      let resRec = await sql.query(
        `SELECT * FROM recomendacion WHERE id_user_recomendado = '${id.id}'` )
        let resPer = await sql.query(
          `SELECT * FROM users WHERE id = '${id.id}'` )
          let resIdi = await sql.query(
            `SELECT * FROM idiomas WHERE id_user_idioma = '${id.id}'` )
            let resHobb = await sql.query(
              `SELECT * FROM hobbies WHERE id_user_hobbies = '${id.id}'` )
              let resExtras = await sql.query(
                `SELECT * FROM extras WHERE id_user_extras = '${id.id}'` )

      return {resCur,resRec, resPer, resIdi, resHobb, resExtras}
      
  }