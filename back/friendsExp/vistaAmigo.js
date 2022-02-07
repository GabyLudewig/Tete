const midd = require('../../middlewares/midd.usuarios')
const ControladorAmigos = require('./controladorAmigos')

//Exportar los modulos para ser usados.
module.exports = async (app)=>{
    app.get('/inicio', async (req, res) => {
      try {
        console.log('Página principal')
        res.render('inicio')
      } catch(err) {
        res.status(400).json({ message: 'Error cargando la página principal'})
      }
    })

    app.post('/amigos', async (req, res) => {
      const amigo = req.body
      try {
        const nuevoAmigo = await ControladorAmigos.addAmigo(amigo)
        res.status(200).json({ message: "Amigo creado exitosamente", amigo: nuevoAmigo})
      } catch(err) {
        res.status(400).json({ message: 'Error cargando la página principal'})
      }
    })

    app.delete('/amigos/:id', async (req, res) => {
      const idAmigo = req.params.id
      try {
        const amigoBorrado = await ControladorAmigos.deleteFriend(idAmigo)
        res.status(200).json({ message: 'Amigo borrado exitosamente', producto: amigoBorrado})
      } catch (err) {
        res.status(400).json({ message: 'Problema borrando al amigo', error: err})
      }
    })

    app.get('/amigos', async (req, res) => {
      try {
        const amigos = await ControladorAmigos.obtainFriends()
        res.status(200).json({ message: "Amigos obtenidos exitosamente", amigos})
      } catch(err) {
        res.status(400).json({ message: 'Error obteniendo amigos', err})
      }
    })

}