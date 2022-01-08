const express = require("express");
const Proyects = require("../models/Proyect");

const router = express.Router();

//Obtener toda la coleccion
router.get("/", (req, res) => {
  Proyects.find()
    .exec()
    .then((x) => res.status(200).send(x));
});

//Obtener por id
router.get("/:id", (req, res) => {
  const id = { _id: req.params.id };
  Proyects.findById(id)
    .exec()
    .then((x) => res.status(200).send(x));
});

//Crear una coleccion
router.post("/", (req, res) => {
  Proyects.create(req.body).then((x) => res.status(201).send(x));
});

//Editar

router.put("/:id", (req, res) => {
  const id = { _id: req.params.id };
  Proyects.findOneAndUpdate(id, req.body).then((x) => res.sendStatus(204));
});

//Eliminar

router.delete("/:id", (req, res) => {
  const id = { _id: req.params.id };
  Proyects.findByIdAndDelete(id)
    .exec()
    .then((x) => res.sendStatus(204));
});

module.exports = router;
