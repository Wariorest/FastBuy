import Router from "express";
import UserController from "../controllers/userController.js";
import userController from "../controllers/userController.js";
import autMiddleware from "../middleware/autMiddleware.js";

const router = new Router();

router.post('/registration', UserController.registration);
router.post('/login', userController.login);
router.get('/auth', autMiddleware, userController.check);


export default router;
