const userController = require("../controller/user");
const midd = require('../midd/midd.usuarios')

module.exports = (app) => {
  app.post("/login", async (req, res) => {
    let result = await userController.loginUser(req.body);
    res.send(result);
  });

  app.post("/registro",midd.validarDatosDeUsuario, async (req, res) => {
    let result = await userController.registroUser(req.body);
    res.send(result);
  });
  
  app.post("/buscarUsuario", async (req, res) => {
    const usuario = req.body
    const result = await userController.buscarUsuario(usuario)
    res.send( result )
  })

app.post("/buscarPerfilUsuario", async (req, res) => {
  const id = req.body
  const busca = await userController.buscarPerfilUsuario(id)
  res.send( busca )
})

app.post("/perfil", async (req, res) => {
  const id = req.body
  const busca = await userController.perfil(id)
  res.send( busca )
})
};