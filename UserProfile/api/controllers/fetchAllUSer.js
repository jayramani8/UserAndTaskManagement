const User = require("../models/userdata");

const FetchAll = async (req, res) => {
  const result = await User.find({});
  console.log(result);
  res.send(result);
};
module.exports = { FetchAll };
