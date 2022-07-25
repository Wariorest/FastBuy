import express from "express";
import dotenv from "dotenv";

dotenv.config()
const PORT = process.env.PORT || 3000;
const app = express();

async function startApp(){
    try{
        app.listen(PORT, () => {
            console.log('server started on port ' + PORT);
        })
    }catch(err){
        console.log(err);
    }
}
startApp()