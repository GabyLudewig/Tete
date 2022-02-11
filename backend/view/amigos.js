const amigosController = require("../controller/amigos");

module.exports = (app) => {
  app.post("/amigos", async (req, res) => {
    let result = await amigosController.amigos(req.body);
    res.send(result);
  });
}

module.exports = (app) => {
    app.post("/agregarAmigos", async (req, res) => {
      let result = await amigosController.agregarAmigos(req.body);
      res.send(result);
    });
  }

  module.exports = (app) => {
    app.post("/aceptarAmigos", async (req, res) => {
      let result = await amigosController.aceptarAmigos(req.body);
      res.send(result);
    });
  }