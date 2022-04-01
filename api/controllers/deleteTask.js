const db = require("../models/index");
const task = db.Task;
const deleteTask = async(req,res)=>{
    const Id = req.params.id;
    // console.log(Id);
    
    await task.destroy({where:{id:Id}})

    res.status(200).json();

}
module.exports = {deleteTask}
