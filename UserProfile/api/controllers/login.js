const User = require("../models/userdata");
const jwt = require("jsonwebtoken");

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "plz fill the data" });
    }
    const result = await User.findOne({ email: email, password: password });

    if (result) {
      console.log(result._id);
      const token = jwt.sign(
        { _id: result._id },
        "jayramanijayramanijayramanijayramanijay"
      );
      // console.log(token);
      return res.send({ token: token });
    } else {
      return res.status(400).json({ error: "faild" });
    }
  } catch (err) {
    res.status(400).send("error");
    console.log(err);
  }
};

module.exports = { userLogin };
