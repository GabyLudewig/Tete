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


app.post("/perfil", async (req, res) => {
  let busca = await userController.perfil(req.body)
  res.send( busca )
})
};


