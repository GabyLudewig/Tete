const modeloAmigos = require('./modeloAmigos')

//Exportamos nuestros Modulos

module.exports.obtainFriends = async (amigo) => {
  try {
    const amigos = await modeloAmigos.buscarAmigos(amigo)
    return amigos
  } catch (err) {
    console.log("Error obteniendo amigos en el controlador" + err);
    throw new Error({ error: err.message });
  }
};

module.exports.addAmigo = async (amigo) => {
  try {
    const amigoNuevo = await modeloAmigos.crearAmigo(amigo)
    console.log(amigoNuevo);
    return amigoNuevo
  } catch (err) {
    console.log("Error creando amigo en controlador" + err);
    throw new Error({ error: err.message });
  }
};

module.exports.deleteAmigo = async (idAmigo)=> {
  try {
      let result = await modeloAmigos.borrarAmigo(idAmigo)
      return result
  }catch (error) {
      console.log("Error al borrar amigo en controlador", error)
      throw new Error (error)
  }
}