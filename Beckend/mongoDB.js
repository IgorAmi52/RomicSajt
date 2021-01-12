const { json } = require("body-parser");
const { FILE } = require("dns");
const mongoose = require("mongoose");
const { fileURLToPath } = require("url");

const ZanrShema = new mongoose.Schema({
  ime: { type: String, require: true },
  slika: { type: String, require: true },
});

module.exports = mongoose.model("ZanrShema", ZanrShema);
