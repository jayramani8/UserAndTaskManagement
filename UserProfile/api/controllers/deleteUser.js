const User = require("../models/userdata");
const mongodb = require("mongodb");

const deleteUser = async (req, res) => {
  const id = req.params.id;
  await User.deleteOne({ _id: new mongodb.ObjectId(id) });
  return res.status(200).json({ message: "deleted" });
};
module.exports = { deleteUser };
