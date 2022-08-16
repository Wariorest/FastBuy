import express from "express";
import dotenv from "dotenv";
import sequelize from "./db.js"
import * as models from "./models/models.js";
import cors from "cors";
import routers from "./routers/index.js";

dotenv.config()

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', routers);


const startApp = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();

        app.listen(PORT, () => {
            console.log('server started on port ' + PORT);
        })
    } catch (err) {
        console.log(err);
    }
}
startApp();
