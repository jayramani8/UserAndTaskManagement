const db = require("../models/index");
const task = db.Task;
const User = db.User;

const taskUpdate = async(req,res)=>{
    try{
        const Id = req.params.id;
        // console.log(Id); 
        const data = await task.findAll({include:[{model:User}],where:{id:Id}});
        await res.send(data);
        console.log(data);

    }catch(err){
        console.log(err);
    }
    
}
module.exports = {taskUpdate}
