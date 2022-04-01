const db = require("../models/index");
const User = db.User;

const user = async(req,res)=>{
    // console.log(req.body);
    await User.create(req.body);
    res.send("created");
    return res.status(200).json();

    // const data  = await db.findAll({});
    // console.log(data);
}
module.exports = {  
    user
};