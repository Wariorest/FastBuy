import ApiError from "../error/ApiError.js";
import {v4 as uuidV4} from 'uuid';
import {Device, DeviceInfo} from "../models/models.js";
import * as path from "path";

class DeviceController {
    async create(req, res, next) {
        try {
            let {name, price, brandId, typeId, info} = req.body;
            console.log(req)
            const {img} = req.files;
            let fileName = uuidV4() + ".jpg";

            console.log(path.resolve())
            await img.mv(path.resolve(path.resolve(), 'static', fileName));
            const device = await Device
                .create({name, price, brandId, typeId, img: fileName});
            if (info) {
                info = JSON.parse(info);
                info.forEach(i =>
                    DeviceInfo.create({
                        title: i.title,
                        description: i.description,
                        deviceId: device.id
                    })
                )
            }

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
        if (!brandId && !typeId) {
            devices = await Device.findAndCountAll({limit, offset});
        }
        if (brandId && !typeId) {
            devices = await Device.findAndCountAll({where: {brandId}, limit, offset});
        }
        if (!brandId && typeId) {
            devices = await Device.findAndCountAll({where: {typeId}, limit, offset});
        }
        if (brandId && typeId) {
            devices = await Device.findAll({where: {brandId, typeId}, limit, offset});
        }

        return res.json(devices);
    }

    async getOne(req, res) {
        const {id} = req.params;
        const device = await Device.findOne(
            {
                where: {id},
                include: [{model:DeviceInfo, as: 'info'}]

            }
        )
        return res.json(device);
    }
}

export default new DeviceController();
