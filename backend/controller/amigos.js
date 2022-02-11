const amigosModel = require("../model/amigos");

module.exports.amigos = async (amigo) => {
    return await amigosModel.amigos(amigo)
  }

  module.exports.agregarAmigos = async (amigo) => {
    return await amigosModel.agregarAmigos(amigo)
  }

  module.exports.aceptarAmigos = async (amigo) => {
    return await amigosModel.aceptarAmigos(amigo)
  }