import { connect } from "mongoose";
import { MONGODB_URI } from "../config";

(async()=>{ 
try{

    const db = await connect(MONGODB_URI)
    console.log(`DB conectada en ${db.connection.name}`)

}catch(error){
    console.log(error)
}




 })()