const db = require("../models/index");
const User = db.User;
const seq = db.sequelize;
const task = db.Task

const fetchUSer = async(req,res)=>{
    try{
        const data = await seq.query("SELECT `users`.`id`, `users`.*, COUNT(`tasks`.`assignUser`) AS 'task' FROM `users` AS `users` LEFT OUTER JOIN `tasks` AS `tasks` ON `users`.`id` = `tasks`.`assignUSer` GROUP BY `users`.`id`;")
        res.send(data);
    }catch(err){
        console.log(err);
    }
    
}
module.exports = {fetchUSer}