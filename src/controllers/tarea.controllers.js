import Tarea from "../models/tarea"
//controlador para obtener tareas
export const obtenerTareas = async (req, res) => {
    try {
        const tareas = await Tarea.find()
        res.status(200).json(tareas)


    } catch (error) {
        console.log(error)
        res.status(404).json({
            mansaje: 'error al buscar tareas'
        })
    }

}
//controlador para crear una tarea

export const crearTarea = async (req, res) =>{
    try{
       const tareaNueva = new Tarea(req.body)
       await tareaNueva.save()
       res.status(201).json({
        mensaje: 'el producto fue creado correctamente'
       });

    }catch(error){
        console.log(error)
        res.status(404).json({
            mansaje: 'error al crear la tarea'
        })
    }
};
//controlador para borrar una tarea
export const borrarTarea = async (req, res)=>{
 try{
  //obtener el id y solicitar a mongoose el borrar
  
  console.log(req.params.id);
  await Tarea.findByIdAndDelete(req.params.id);
  res.status(200).json({
    mensaje: 'la tarea fue eliminada'
  })

 }catch(error){

    console.log(error)
    res.status(404).json({
        mensaje: 'la tarea no se pudo eliminar'
    })
 }

};

//controlador para editar una tarea
export const editarTarea = async (req, res)=>{
    try{
       // extraer el id del request y el body
      await Tarea.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).json({
        mensaje: 'la tarea se pudo editar'
      })
    }catch(error){
        console.log(error);
        res.status(404).json({
            mensaje: 'la tarea no se pudo ser editada'
        })
    }}



export const obtenerTarea = async (req, res) => {
    try {
        const tarea = await Tarea.findById(req.params.id)
        res.status(200).json(tarea)


    } catch (error) {
        console.log(error)
        res.status(404).json({
            mansaje: 'error al buscar tareas'
        })
    }

}