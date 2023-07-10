import express from 'express'
import cors from 'cors'
import morgan from 'morgan';
import * as dotenv from 'dotenv'
import './src/database/dbConnection'
import tareasRouter from './src/routes/tarea.routes'

//configuramos un puerto
//creo una instancia de express
const app = express();

app.set("port", process.env.PORT || 3005 );
app.listen(app.get("port"), ()=>{
    console.log('estoy en el puerto '+ app.get("port") )
});

//middlewares: funciones que ejecutan alguna tarea antes de llegar a las rutas
app.use(cors());  // permite conexiones remotas
app.use(express.json()); //interpreta los formatos json
app.use(express.urlencoded({extended: true})); // permite en el objeto request los strings y arrays
app.use(morgan('dev')) //nos da info extra en la terminal

//rutas
// http://localhost:3005/apilistatareas/tareas
app.use("/apilistatareas", tareasRouter)




