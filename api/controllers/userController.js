const db = require("../models/index");
const User = db.User;

const user = async(req,res)=>{
    try{
        await User.create(req.body);
        res.send("created");
        return res.status(200).json();
        
    }catch(err){
        console.log(err);
    }
    // console.log(req.body);


    // const data  = await db.findAll({});
    // console.log(data);
}
module.exports = {  
    user
};