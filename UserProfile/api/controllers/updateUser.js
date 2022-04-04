const User = require("../models/userdata");

const UpdateUser = async (req, res) => {
  const id = req.params.id;
  const updatedUserData = {
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
  await User.updateMany({ _id: id }, updatedUserData);
  return res.status(200).json({ message: "update" });
};
module.exports = { UpdateUser };
