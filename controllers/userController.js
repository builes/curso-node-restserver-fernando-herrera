//En este archivo ponemos las funciones que van a ir en cada ruta

const { response } = require("express");

const getUSers = (req, res) => {
  //Asi recibimos las queries(lo que se pone despues de ?) por la url)
  const { page = 0, limit = 10, name = "No name" } = req.query;

  res.json({ page, limit, name, msg: "GET api" });
};

const updateUser = (req, res) => {
  // asi capturamos los parametros enviados por la url
  const { id } = req.params.id;

  res.status(400).json({ id, msg: "PUT api" });
};

const createUser = (req, res) => {
  //con requ.body accedemos a lo que envia el usuario
  const { nombre, edad } = req.body;
  res.status(201).json({ nombre, edad, msg: "POST api" });
};

const deleteUser = (req, res) => {
  res.json({ ok: true, msg: "Delete api" });
};

module.exports = {
  getUSers,
  updateUser,
  createUser,
  deleteUser,
};
