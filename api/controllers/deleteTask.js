const db = require("../models/index");
const task = db.Task;
const deleteTask = async(req,res)=>{
    try{
    const Id = req.params.id;
    await task.destroy({where:{id:Id}})
    res.status(200).json();
    }catch(err){
        console.log(err);
    }

}
module.exports = {deleteTask}
