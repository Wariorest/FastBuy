import express from "express";
import dotenv from "dotenv";
import sequelize from "./db.js"


dotenv.config()

const PORT = process.env.PORT || 3000;
const app = express();





const startApp = async ()=>{
    try{
        await sequelize.authenticate();
        await sequelize.sync();
        
        app.listen(PORT, () => {
            console.log('server started on port ' + PORT);
        })
    }catch(err){
        console.log(err);
    }
}
startApp()