const User = require("../models/userdata");

const fetchUser = async (req, res) => {
  const id = req.params.id;
  //   console.log(id);
  const result = await User.findOne({ _id: id });
  console.log(result.email);
  res.send(result);
};
module.exports = { fetchUser };
