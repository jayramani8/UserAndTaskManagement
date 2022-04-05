const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const { object } = require("webidl-conversions");
const { stringify } = require("querystring");
const user = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  mobile: String,
  address: {
    addressLine: String,
    city: String,
    state: String,
    zip: Number,
  },
  hobbies: Array,
  //   tokens:[
  //     {
  //       token:{
  //         type:String,
  //         required:true
  //       }
  //     }
  //   ]
});
module.exports = mongoose.model("Users", user);
