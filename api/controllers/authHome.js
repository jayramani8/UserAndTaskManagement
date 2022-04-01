const jwt = require("jsonwebtoken");

const authHome = async(req,res)=>{
    const passToken = req.get("passToken");
    console.log("passToken");
    const getToken = passToken.split(" ")[1];
    // console.log(getToken);
    try{
    const decoded = jwt.verify(getToken,"jayramanijayramanijayramanijayramanijay");
    // console.log(decoded.id);
        if(decoded.id){
          return res.status(200).json({ msg: "auth success" });    

        }

    }catch(err){
        console.log(err);
    }
}
module.exports = {authHome}
