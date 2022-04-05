const db = require("../models/index");
const task = db.Task;
// const User = db.User;

const updatedTask = async(req,res)=>{
    try{
        const Id = req.params.id;
        const updateTask = {
            title:req.body.title,
            assignUser:req.body.assignUser,
            CompletionDate:req.body.CompletionDate,
            status:req.body.status
        }
        await task.update(updateTask,{where:{id:Id}});
        return res.status(200).json();
    }catch(err){
        console.log(err);
    }


}
module.exports = {updatedTask}
