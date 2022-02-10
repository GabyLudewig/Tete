const quotesModel = require("../model/quotes");

module.exports.saveQuote = async (quote) => {
  await quotesModel.saveQuote(quote);
};

module.exports.listQuotes = async () => {
  return await quotesModel.listQuote();
};
