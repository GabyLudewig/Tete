//Importamos los modulos requeridos
const Amigos = require('../../sql/db/db.modelo.amigos')

module.exports.buscarAmigos = async ()=> {
  try {
      const amigos = await amigos.findAll()
      return amigos
  }catch (error){
      console.log("Error obtener amigos en modelo")
      throw new Error (error)
  }
}


module.exports.crearAmigo = async (amigo)=> {
  try {
      let amigoNuevo = await Amigos.create(amigo)
      console.log(amigoNuevo)
      return amigoNuevo
  }catch (error){
      console.log("Error al crear usuario en modelo")
      throw new Error (error)
  }
}

module.exports.borrarAmigo = async (idAmigo)=> {
  try {
      let amigoBorrado = await Amigos.destroy({where: {id: `${idAmigo}`}})
      return amigoBorrado
  }catch (error){
      console.log("Error al borrar amigo en modelo")
      throw new Error (error)
  }
}