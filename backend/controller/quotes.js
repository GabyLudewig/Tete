const quotesModel = require("../model/quotes");

module.exports.saveQuote = async (quote) => {
  await quotesModel.saveQuote(quote);
};

module.exports.listQuotes = async () => {
  return await quotesModel.listQuote();
};

module.exports.add = (a, b) => {
  return a + b;
};
