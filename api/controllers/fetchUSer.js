const db = require("../models/index");
const user = db.User;
const userFetch = async(req,res)=>{
    try{
        const Id = req.params.id;
        // console.log(id); 
        const data = await user.findAll({where:{id:Id}});
        await res.send(data);
    }catch(err){
        console.log(err);
    }

}
module.exports = {userFetch}
