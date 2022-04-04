const express = require("express");
const { route } = require("express/lib/application");
// const mongodb = require("mongodb");
const User = require("../models/userdata");
const router = express.Router();
// const jwt = require("jsonwebtoken");
// const authenticate = require("../middleware/authenticate");
const register = require("../controllers/register");
const login = require("../controllers/login");
const auth = require("../controllers/auth");
const fetchUser = require("../controllers/fetchUser");
const FetchAll = require("../controllers/fetchAllUSer");
const UpdateUser = require("../controllers/updateUser");
const deleteUser = require("../controllers/deleteUser");

//register User
router.post("/register", register.registerUSer);

// Login User
router.post("/login", login.userLogin);

//Authentication
router.get("/auth", auth.auth);

//FetchALL USer
router.get("/fetchAll", FetchAll.FetchAll);

// Fetch USer
router.get("/fetchUser/:id", fetchUser.fetchUser);

//Update User
router.put("/updateUser/:id", UpdateUser.UpdateUser);

//Delete User
router.delete("/deleteUser/:id", deleteUser.deleteUser);

module.exports = router;
