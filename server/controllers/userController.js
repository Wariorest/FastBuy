class UserController{
    async registration(req,res){

    }
    async login(req,res){

    }
    async check(req,res){
        const request = req.query;
        res.json(request);
    }
}

export default new UserController();
