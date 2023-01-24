import express from "express";
import dotenv from "dotenv";
import sequelize from "./db.js"
import cors from "cors";
import routers from "./routers/index.js";
import errorHandlingMiddleware from "./middleware/ErrorHandlingMiddleware.js";
import fileUpload from "express-fileupload"


dotenv.config()

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());
//app.use(fileUpload({}))

app.use('/api', routers);
//errors handler
app.use(errorHandlingMiddleware)

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
