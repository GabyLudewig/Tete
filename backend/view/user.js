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
  
};
