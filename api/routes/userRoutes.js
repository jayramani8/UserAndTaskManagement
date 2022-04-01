const express = require("express");
const { route } = require("express/lib/application");

const router = express.Router();

const userController = require("../controllers/userController");
const showUser = require("../controllers/showUser");
const activeUser = require("../controllers/activeUSer")
const addTask = require("../controllers/addTask");
const showTask = require("../controllers/showTask");
const updateTask = require("../controllers/updateTask")
const fetchUser = require("../controllers/fetchUSer")
const updateUSer = require("../controllers/updateUSer")
const deleteUser = require("../controllers/deleteUser");
const adminLogin = require("../controllers/adminLogin")
const authHome = require("../controllers/authHome");
const updatedTask = require("../controllers/updatedTask");
const deleteTsk = require("../controllers/deleteTask")

router.post("/insert",userController.user);

router.get("/show",showUser.fetchUSer);

router.get("/active",activeUser.active);

router.post("/addtask",addTask.task);

router.post("/showTask",showTask.fetchTask);

router.get("/fetchUser/:id",fetchUser.userFetch);

router.get("/update/:id",updateTask.taskUpdate);

router.put("/updatedTask/:id",updatedTask.updatedTask)

router.put("/updateUSer/:id",updateUSer.userUpdate);

router.delete("/deleteUser/:id",deleteUser.userDelete);

router.delete("/deleteTsk/:id",deleteTsk.deleteTask);


router.post("/adminLogin",adminLogin.adminLogin);

router.get("/authHome",authHome.authHome);

module.exports = router;
