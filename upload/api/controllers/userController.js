
const db = require("../models")

const user = async(req,res)=>{
    // console.log(req.body);
    await db.create(req.body);
    res.send("created");
    // const data  = await db.findAll({});
    // console.log(data);
}
module.exports = {  
    user
};