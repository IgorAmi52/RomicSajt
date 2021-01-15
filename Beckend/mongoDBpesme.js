const mongoose = require("mongoose");

const PesmeShema = new mongoose.Schema({
  put: { type: String, require: true },
  zanr: { type: String, require: true },
  ime: { type: String, require: true },
});

module.exports = mongoose.model("PesmeShema", PesmeShema);
