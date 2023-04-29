import ApiError from "../error/ApiError.js";
import bcrypt from "bcrypt";
import {User, CartDevice} from "../models/models.js";
import jwt from 'jsonwebtoken';

const generateJWT = (id, email, role)=>{
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    );
}

class UserController {
    async registration(req, res, next) {
        const {email, password, role} = req.body;
        if(!email || !password){
            return next(ApiError.badRequest("Incorrect email or password"));
        }
        const candidate = await User.findOne({where: {email}});
        if(candidate){
            return next(ApiError.badRequest("User email is used, try new one"));
        }
        const hashPassword = await bcrypt.hash(password,5);
        const user = await User.create({email, role, password: hashPassword});
        const cart = await CartDevice.create({userId: user.id});
        const token = generateJWT(user.id, user.email, user.role);
        return res.json({token})
    }

    async login(req, res, next) {
        const {email, password} = req.body;
        const user = await User.findOne({where:{email}});
        if(!user){
            return next(ApiError.internal("User with " + email +" not found"));
        }
        let comparePassword = bcrypt.compareSync(password, user.password);
        if(!comparePassword){
            return next(ApiError.internal("Incorrect password"));
        }
        const token = generateJWT(user.id, user.email, user.role);

        return res.json({token});
    }

    async check(req, res, next) {
        const {id} = req.query;
        if(!id){
            return next(ApiError.badRequest("id is wasn't input"));
        }
        res.json(id);
    }
}

export default new UserController();
