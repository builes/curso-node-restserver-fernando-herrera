const { Router } = require("express");
const {
  getUSers,
  updateUser,
  createUser,
  deleteUser,
} = require("../controllers/userController");

const router = Router();

router.get("/", getUSers);

//Este metodo lo usamos para actualizar un recurso existente
//Con :id decimos que vamos a enviar un parametro por la URL
router.put("/:id", updateUser);

//Este metodo lo usamos para crear elementos nuevos
router.post("/", createUser);

router.delete("/", deleteUser);

module.exports = router;
