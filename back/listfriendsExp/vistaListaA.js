const midd = require('../../middlewares/midd.usuarios')
const ControladorListaAmigos = require('./controladorListaA')

//Exportar los modulos para ser usados.
module.exports = async (app)=>{
    app.get('/Lista Amigos', async (req, res) => {
      try {
        console.log('Lista Amigos')
        res.render('Lista Amigos')
      } catch(err) {
        res.status(400).json({ message: 'Error cargando la lista de amigos'})
      }
    })

    app.post('/Lista Amigos', async (req, res) => {
      const amigo = req.body
      try {
        const nuevoAmigo = await ControladorListaAmigos.addAmigo(amigo)
        res.status(200).json({ message: "Amigo creado exitosamente en la lista de amigos", amigo: nuevoAmigo})
      } catch(err) {
        res.status(400).json({ message: 'Error agregando amigo a la lista de amigos'})
      }
    })

    app.delete('/Lista Amigos/:id', async (req, res) => {
      const idAmigo = req.params.id
      try {
        const amigoBorrado = await ControladorListaAmigos.deleteFriend(idAmigo)
        res.status(200).json({ message: 'Amigo borrado exitosamente de la lista de amigos', amigo: amigoBorrado})
      } catch (err) {
        res.status(400).json({ message: 'Problema borrando al amigo de la lista de amigos', error: err})
      }
    })

    app.get('/Lista Amigos/all', async (req, res) => {
      try {
        const amigos = await ControladorListaAmigos.obtainFriends()
        res.status(200).json({ message: "Amigos de la lista de amigos obtenidos exitosamente", amigos})
      } catch(err) {
        res.status(400).json({ message: 'Error obteniendo amigos', err})
      }
    })

}