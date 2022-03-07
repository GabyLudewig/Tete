const sql = require("../database/conexion");

module.exports.amigos = async (userData) => {
    try {
        let response = await sql.query(
            `SELECT * FROM amigos WHERE (id_user1 = '${userData.id}' OR id_user2 = '${userData.id}') AND state = '2'`
        );
        const amigos = []
        let amigo = 0;
        for (let i = 0; i < response[0].length; i++) {

            if (response[0][i]) {
                let responsePar1 = response[0][i].id_user1
                let responsePar2 = response[0][i].id_user2
                let comparar = parseInt(userData.id)
                console.log(responsePar1)

                if (responsePar1 === comparar) {
                    amigo = responsePar2
                    amigos[i] = amigo
                } if (responsePar2 === comparar) {
                    amigo = responsePar1
                    amigos[i] = amigo
                }
            }
            else {
                return { loginResult: 'No tienes amigos =(' }
            }
        }
        let res = []
        for (let i = 0; i < amigos.length; i++) {
            let mostrar = await sql.query(`SELECT * FROM users WHERE id = '${amigos[i]}'`)
            res[i] = mostrar
            console.log(mostrar)
        }
        return [res]
    } catch (error) {
        console.log("Error en modelo")
        throw new Error(error)
    }
};

module.exports.agregarAmigos = async (amigo) => {

    let res = await sql.query(
        `INSERT INTO amigos (id_user1, id_user2, state) VALUES ('${amigo.id_1}', '${amigo.id_2}' , "2")`)
    return { res }
  }

  module.exports.aceptarAmigos = async (amigo) => {

    let res = await sql.query(
        `UPDATE amigos SET state = "2" WHERE id_amistad = '${amigo.id_amistad}'`)
    return { res }
  }