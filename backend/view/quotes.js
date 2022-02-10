const quotesController = require("../controller/quotes");
const auth = require("../midd/authenticate");

module.exports = (app) => {
  app.post("/savequotes", (req, res) => {
    quotesController.saveQuote(req.body);
    res.send({ id_user: req.body.id_user, quote: req.body.quote });
  });

  app.get("/listquotes", async (req, res) => {
    const list = await quotesController.listQuotes();
    res.send({ list });
  });
};
