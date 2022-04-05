const jwt = require("jsonwebtoken");
const db = require("../models/index");
const login = db.Login;

const adminLogin = async(req,res)=>{
    console.log(req.body);
    try{
        const { email, password } = req.body;
        
        if(!email || !password){
            return res.status(400).json({ error: "plz fill the data" });
        }
        const result = await login.findOne({where:{email:email,password:password}})
        if(result){
          const  token = jwt.sign({id:result.id},"jayramanijayramanijayramanijayramanijay");
        //   console.log(result);
            // console.log(token);
            res.status(200).json();
           return res.send({token: token});
        //   return res.status(200).json({ error: "faild" });    

        }
    }catch(err){
        console.log(err);
    }

}
module.exports = {adminLogin}
