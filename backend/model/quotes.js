const sql = require("../database/conexion");

module.exports.saveQuote = async (quote) => {
  await sql.query(
    `INSERT INTO publicaciones (id_user,quote) VALUES ('${quote.id_user}', '${quote.quote}')`
  );
};

module.exports.listQuote = async () => {
  let result = await sql.query(
    "SELECT * FROM publicaciones"
  );
  return result;
};
