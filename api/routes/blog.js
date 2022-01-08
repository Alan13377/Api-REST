const express = require("express");
const Blogs = require("../models/Blogs");

const router = express.Router();

//Obtener toda la coleccion
router.get("/", (req, res) => {
  Blogs.find()
    .exec()
    .then((x) => res.status(200).send(x));
});

//Obtener por id
router.get("/:id", (req, res) => {
  const id = { _id: req.params.id };
  Blogs.findById(id)
    .exec()
    .then((x) => res.status(200).send(x));
});

//Crear una coleccion
router.post("/", (req, res) => {
  Blogs.create(req.body).then((x) => res.status(201).send(x));
});

//Editar

router.put("/:id", (req, res) => {
  const id = { _id: req.params.id };
  Blogs.findOneAndUpdate(id, req.body).then((x) => res.sendStatus(204));
});

//Eliminar

router.delete("/:id", (req, res) => {
  const id = { _id: req.params.id };
  Blogs.findByIdAndDelete(id)
    .exec()
    .then((x) => res.sendStatus(204));
});

module.exports = router;
