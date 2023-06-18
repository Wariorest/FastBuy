import Router from "express";

import OrderController from "../controllers/orderController.js";
import checkRoleMiddleware from "../middleware/checkRoleMiddleware.js";



const router = new Router();

router.post('/', OrderController.create);
router.get('/',checkRoleMiddleware('ADMIN'), OrderController.getAll);
router.get('/:id', OrderController.getOne);


export default router;
