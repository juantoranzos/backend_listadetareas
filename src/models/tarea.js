import { Schema, model } from "mongoose"


const tareaSchema = new Schema({
  tareas: {
    type: String,
    minLength: 2,
    maxLength: 100,
    unique: true,
    required: true

  },

})

const Tarea = model( 'tarea', tareaSchema)
export default Tarea