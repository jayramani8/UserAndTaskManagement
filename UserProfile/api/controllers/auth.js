const User = require("../models/userdata");
const jwt = require("jsonwebtoken");

const auth = (req, res) => {
  const passToken = req.get("passToken");
  const getToken = passToken.split(" ")[1];
  //   console.log(getToken);
  try {
    const decode = jwt.verify(
      getToken,
      "jayramanijayramanijayramanijayramanijay"
    );
    const verifyToken = decode._id;
    User.findOne({ _id: verifyToken }).then((verifyData) => {
      const userVerifyData = {
        id: verifyData._id,
        firstName: verifyData.firstName,
        lastName: verifyData.lastName,
        email: verifyData.email,
        password: verifyData.password,
        mobile: verifyData.mobile,
        address: verifyData.address,
        hobbies: verifyData.hobbies,
      };
      //   console.log(userVerifyData);
      return res.status(200).json(userVerifyData);
    });
  } catch (err) {
    console.log(err);
  }
  //   try {
  //     var decoded = jwt.verify(
  //       getToken,
  //       "jayramanijayramanijayramanijayramanijay"
  //     );
  //     console.log(decoded._id);
  //     const tokenId = decoded._id;
  //     User.findOne({ _id: tokenId }).then((verifyData) => {
  //       const userVerifyData = {
  //         id: verifyData._id,
  //         firstname: verifyData.firstName,
  //         lastname: verifyData.lastName,
  //         email: verifyData.email,
  //         password: verifyData.password,
  //         mobile: verifyData.mobile,
  //         hobbies: verifyData.hobbies,
  //         address: verifyData.address,
  //       };
  //       return res.status(200).json(userVerifyData);
  //     });
  //   } catch (err) {
  //     console.log("error", err);
  //   }
};
module.exports = { auth };
