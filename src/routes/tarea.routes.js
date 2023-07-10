import { Router } from "express";
import { borrarTarea, crearTarea, obtenerTareas } from "../controllers/tarea.controllers";
 const router = Router()

// app.get('/test', (req, res)=>{
//     res.send('esto es una prueba de la peticion GET a mi backend')


// })

router.route('/tareas').get(obtenerTareas).post(crearTarea)
router.route('/tareas/:id').delete(borrarTarea)


export default router