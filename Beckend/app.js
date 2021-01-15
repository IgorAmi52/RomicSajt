const express = require("express");
const mongoose = require("mongoose");
const app = express();
const BodyParser = require("body-parser");
const ZanrShema = require("./mongoDBZanr");
const PesmeShema = require("./mongoDBpesme");
const multer = require("multer");
const path = require("path");

const MIME_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
};
const MIME_TYPE_MAP_MUSIC = {
  mp3: "mp3",
  wav: "wav",
  ogg: "ogg",
  "audio/mpeg": "mp3",
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
const pesme = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Beckend/pesme");
  },
  filename: (req, file, cb) => {
    var ime = file.originalname.toLowerCase().split(" ").join("-");
    var ext = MIME_TYPE_MAP_MUSIC[file.mimetype];
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
app.use("/pesme", express.static(path.join("Beckend/pesme")));

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
    res.status(200).json({ zanrovi: Zanrovi });
  });
});

//pesme

app.post(
  "/postaviPesmu",
  multer({ storage: pesme }).single("pesma"),
  (req, res, next) => {
    const url = req.protocol + "://" + req.get("host");

    const pesme = new PesmeShema({
      put: url + "/pesme/" + req.file.filename,
      zanr: req.body.zanr,
      ime: req.body.ime,
    });
    pesme.save().then(() => {
      console.log("uspesno stavljanje u bazu");
    });
  }
);

app.get("/dobiPesmu", (req, res, next) => {
  PesmeShema.find().then((pesme) => {
    res.status(200).json({ pesme: pesme });
  });
});
module.exports = app;
