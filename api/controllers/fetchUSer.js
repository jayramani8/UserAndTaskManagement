const db = require("../models/index");
const user = db.User;
const userFetch = async(req,res)=>{
    const Id = req.params.id;
    // console.log(id); 
    const data = await user.findAll({where:{id:Id}});
    await res.send(data);
}
module.exports = {userFetch}
