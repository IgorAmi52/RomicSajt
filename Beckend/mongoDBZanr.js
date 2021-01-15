const mongoose = require("mongoose");

const ZanrShema = new mongoose.Schema({
  ime: { type: String, require: true },
  slika: { type: String, require: true },
});

module.exports = mongoose.model("ZanrShema", ZanrShema);
