import express from "express";
import dotenv from "dotenv";
import sequelize from "./db.js"
import cors from "cors";
import fileUpload from "express-fileupload";
import routers from "./routers/index.js";
import errorHandlingMiddleware from "./middleware/ErrorHandlingMiddleware.js";
import * as path from "path";


dotenv.config()

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(
    path.resolve(), 'static'
    ))
);
app.use(fileUpload({ }));

app.use('/api', routers);
//errors handler
app.use(errorHandlingMiddleware);

const startApp = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();

        app.listen(PORT, () => {
            console.log('server started on port ' + PORT);
            console.log('http://localhost:' + PORT);
        })
    } catch (err) {
        console.log(err);
    }
}

startApp();
