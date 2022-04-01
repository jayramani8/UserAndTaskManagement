const { Op } = require("sequelize");
const db = require("../models/index");
const task = db.Task;
const User = db.User;

const fetchTask = async(req,res)=>{
    const data = req.body;
     const searchTask = data.searchTask;
    let sortTask = [];
    if(data.sortTask!==""){
        sortTask.push([data.sortTask,'ASC']);
        console.log("set");
    }
    console.log(sortTask);
    if(data.searchTask == undefined || data.sortTask===undefined){
        const data = await task.findAll({
            include:[
                {
                    model:User
                }
            ]
        });
        await res.send(data);
    }
    
    else{
        const data = await task.findAll({
            include:[
                {
                    model:User
                }
            ],
            where:{
                title:{
                    [Op.like]:'%' + searchTask + '%'
                },
            },
            
        // // $or:{
            order:sortTask
        // }
        });
        await res.send(data);
    }
    
}
module.exports = {fetchTask}