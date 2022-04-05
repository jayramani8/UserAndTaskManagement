const db = require("../models/index");
const user = db.User;

const active = async(req,res)=>{
    try{
        const data = await user.findAll({where:{status:'Active'}});
        res.send(data);
    }catch(err){
        console.log(err);
    }
    
}
module.exports = {active}