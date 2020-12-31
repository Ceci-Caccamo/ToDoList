const express = require("express");
const router = express.Router();
const proyectoController = require("../controllers/proyectoControllers");
const auth = require("../middleware/auth");
const { check } = require("express-validator");

//Crea un Proyecto
//api/proyecto
router.post(
  "/",
  auth,
  [check("nombre", "El nombre del proyecto es obligatorio").not().isEmpty()],
  proyectoController.crearProyecto
);

//Obtener todos los proyectos
router.get("/", auth, proyectoController.obtenerProyectos);

//Actualizar proyecto via ID
router.put("/:id",
auth,
[check("nombre", "El nombre del proyecto es obligatorio").not().isEmpty()],
proyectoController.actualizarProyecto);

module.exports = router;
