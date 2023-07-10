import { Router } from "express";
import { borrarTarea, crearTarea, editarTarea, obtenerTarea, obtenerTareas } from "../controllers/tarea.controllers";
const router = Router()

router.route('/tareas').get(obtenerTareas).post(crearTarea)

router.route('/tareas/:id').put(editarTarea).delete(borrarTarea).get(obtenerTarea)



export default router