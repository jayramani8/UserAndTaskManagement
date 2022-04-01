const db = require("../models");

const fetchUSer = async(req,res)=>{
    const data = await db.findAll({});
    await res.send(data);
}
module.exports = {fetchUSer}