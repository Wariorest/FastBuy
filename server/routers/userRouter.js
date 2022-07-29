import Router from "express";
const router = new Router();

router.post('/registration',);
router.post('/login',);
router.get('/auth',(req,res)=>{
    res.json({message:'user get router method working'});
});


export default router;
