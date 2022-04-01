const express = require("express");
const app = express();
var cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const bodyparser = require("body-parser");
// const userController = require("./controllers/userController");

// const cors = require("cors");

// app.use(cors(corsOptions));
app.use(cors());

app.use(bodyparser.json());

require("./models");
// require("./models/task");
app.use("/", userRoutes);


app.listen(8080,()=>{
    console.log("start");
})


