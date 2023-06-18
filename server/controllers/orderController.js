import ApiError from "../error/ApiError.js";
import {Order} from "../models/models.js";

class OrderController {
    async create(req, res) {
        const {name,phone,info} = req.body;
        const order = await Order.create({name, phone, info});
        return res.json(order);
    }


    async getAll(req, res) {
        const orders = await Order.findAll();
        return res.json(orders)
    }
    async getOne(req, res) {
        const {id} = req.params;
        const order = await Order.findOne({where:id});
        return res.json(order);
    }

}

export default new OrderController();
