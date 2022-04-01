const db = require("../models/index");
const user = db.User;
const userUpdate = async(req,res)=>{
    const Id = req.params.id;
    const updateUser = {
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        status:req.body.status
    }
    await user.update(updateUser,{where:{id:Id}});
    return res.status(200).json();
}
module.exports = {userUpdate}
