const express = require("express");
const mongoose = require("mongoose");
const app = express();
const BodyParser = require("body-parser");
const ZanrShema = require("./mongoDB");
const multer = require("multer");
const path = require("path");

const MIME_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
};
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const SlikaMime = MIME_TYPE_MAP[file.mimetype];
    let error = new Error("Invalid mime type");
    if (SlikaMime) {
      error = null;
    }
    cb(error, "Beckend/slike");
  },
  filename: (req, file, cb) => {
    var ime = file.originalname.toLowerCase().split(" ").join("-");
    var ext = MIME_TYPE_MAP[file.mimetype];
    cb(null, ime + "-" + Date.now() + "." + ext);
  },
});

mongoose
  .connect(
    "mongodb+srv://Igor:MujYbkjHNn9Zuy1c@cluster0.jnmbj.mongodb.net/zanr?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("conectovan sam dobro");
  })
  .catch(() => {
    console.log("conectovan nisam");
  });

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH,PUT, DELETE, OPTIONS"
  );
  next();
});

app.use(BodyParser.json());
app.use("/slike", express.static(path.join("Beckend/slike")));

app.post(
  "/postaviZanr",
  multer({ storage: storage }).single("slika"),
  (req, res, next) => {
    const url = req.protocol + "://" + req.get("host");
    const semica = new ZanrShema({
      ime: req.body.ime,
      slika: url + "/slike/" + req.file.filename,
    });
    semica.save().then(() => {
      console.log("uspesno stavljanje u bazu");
    });
  }
);

app.get("/dobiZanrove", (req, res, next) => {
  ZanrShema.find().then((Zanrovi) => {
    console.log(Zanrovi);
    res.status(200).json({ zanrovi: Zanrovi });
  });
});

module.exports = app;
