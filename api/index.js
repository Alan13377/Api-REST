const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const blogs = require("./routes/blog");
const proyectos = require("./routes/proyect");
require("dotenv/config");
const app = express();

app.use(bodyParser.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/api/index", (req, res) => {
  res.send("Hola Mundo");
});

app.use("/api/blog", blogs);

app.use("/api/proyect", proyectos);

module.exports = app;
