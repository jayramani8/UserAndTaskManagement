const db = require("../models/index");
const user = db.User;
const userDelete = async(req,res)=>{
    try{
        const Id = req.params.id;
        console.log(Id);
        await user.destroy({where:{id:Id}})
        res.status(200).json();
        
    }catch(err){
        console.log(err);
    }

}
module.exports = {userDelete}
