import ApiError from "../error/ApiError.js";
import {v4 as uuidV4} from 'uuid';
import {Device} from "../models/models.js";
import * as path from "path";

class DeviceController {
    async create(req, res, next) {
        try {
            const {name, price, brandId, typeId, info} = req.body;
            const {img} = req.files;
            let fileName = uuidV4() + ".jpg";
            console.log(path.resolve())
            await img.mv(path.resolve(path.resolve(), 'static', fileName));
            const device = await Device
                .create({name, price, brandId, typeId, img: fileName});

            return res.json(device);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }

    }

    async getAll(req, res) {
        let {brandId, typeId, limit, page} = req.query;
        page = page || 1;
        limit = limit || 9;
        let offset = page * limit - limit;

        let devices;
        if(!brandId && !typeId){
            devices = await Device.findAll({limit, offset});
        }
        if(brandId && !typeId){
            devices = await Device.findAll({where:{brandId}, limit, offset});
        }
        if(!brandId && typeId){
            devices = await Device.findAll({where:{typeId}, limit, offset});
        }
        if(brandId && typeId){
            devices = await Device.findAll({where:{brandId, typeId}, limit, offset});
        }

        return res.json(devices);
    }

    async getOne(req, res) {

    }
}

export default new DeviceController();
