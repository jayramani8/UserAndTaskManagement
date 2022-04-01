const db = require("../models/index");
const user = db.User;

const active = async(req,res)=>{
    const data = await user.findAll({where:{status:'Active'}});
     res.send(data);
}
module.exports = {active}