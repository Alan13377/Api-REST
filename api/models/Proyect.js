const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Proyecto = mongoose.model(
  "Proyect",
  new Schema({
    title: String,
    desc: String,
  })
);

module.exports = Proyecto;
