const db = require("../models/index");
const Task = db.Task;
const user = db.User;

// const Tasks = db.task;


const task = async(req,res)=>{
    console.log(req.body);
    await Task.create(req.body);
    res.send("created");
    return res.status(200).json();

    // const data  = await db.findAll({});
    // console.log(data);
}
module.exports = {  
    task
};