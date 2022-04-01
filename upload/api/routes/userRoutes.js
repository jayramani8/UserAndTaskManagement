const express = require("express");
const { route } = require("express/lib/application");

const router = express.Router();

const userController = require("../controllers/userController");
const showUser = require("../controllers/showUser");

router.post("/insert",userController.user);
router.get("/show",showUser.fetchUSer);
module.exports = router;
