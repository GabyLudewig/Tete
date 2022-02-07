//Importamos los modulos requeridos
const ListaAmigos = require('./modeloListaA')

module.exports.buscarAmigos = async ()=> {
  try {
      const amigos = await ListaAmigos.findAll()
      return amigos
  }catch (error){
      console.log("Error obtener amigos en modelo")
      throw new Error (error)
  }
}


module.exports.crearAmigo = async (amigo)=> {
  try {
      let amigoNuevo = await ListaAmigos.create(amigo)
      console.log(amigoNuevo)
      return amigoNuevo
  }catch (error){
      console.log("Error al crear amigo en lista de amigos")
      throw new Error (error)
  }
}

module.exports.borrarAmigo = async (idAmigo)=> {
  try {
      let amigoBorrado = await ListaAmigos.destroy({where: {id: `${idAmigo}`}})
      return amigoBorrado
  }catch (error){
      console.log("Error al borrar amigo en modelo")
      throw new Error (error)
  }
}