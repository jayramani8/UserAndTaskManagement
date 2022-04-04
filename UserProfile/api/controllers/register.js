const User = require("../models/userdata");

const registerUSer = async (req, res) => {
  try {
    // console.log(req.body);
    const registerData = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      mobile: req.body.mobile,
      address: {
        addressLine: req.body.address.addressLine,
        city: req.body.address.city,
        state: req.body.address.state,
        zip: req.body.address.zip,
      },
      hobbies: req.body.hobbies,
    };
    await User.create(registerData);
    return res.status(200).json({ msg: "success" });
  } catch (err) {
    console.log(err);
  }
};
module.exports = { registerUSer };
