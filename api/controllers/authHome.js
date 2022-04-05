const jwt = require("jsonwebtoken");

const authHome = async(req,res)=>{

    // console.log(getToken);
    try{
        const passToken = req.get("passToken");
        console.log("passToken");
        const getToken = passToken.split(" ")[1];
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
