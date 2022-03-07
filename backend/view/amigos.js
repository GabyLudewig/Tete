const amigosController = require("../controller/amigos");
const auth = require("../midd/authenticate");


  module.exports = (app) => {
    app.post("/aceptarAmigos", auth.authenticate, async (req, res) => {
      let result = await amigosController.aceptarAmigos(req.body);
      res.send(result);
    });

    app.post("/listAmigos", async (req, res) => {
      let result = await amigosController.amigos(req.body);
      res.send(result);
    });

    app.post("/agregarAmigos", async (req, res) => {
      let result = await amigosController.agregarAmigos(req.body);
      res.send(result);
    });
  }

  
