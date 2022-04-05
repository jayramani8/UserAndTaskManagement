const express = require("express");
var cors = require("cors");
const userRoute = require("./routes/userRouts");
const app = express();
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
// const cookieParser = require("cookie-parser");

app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/userdata", () => {
    console.log("connect db");
  })
  .then((res) => {
    console.log(res);
  })
  .catch((e) => console.log(e));
app.get("/", (req, res) => {
  res.send("you are working fine");
});
app.use(bodyparser.json());
app.use("/", userRoute);
app.listen(8000, () => {});
