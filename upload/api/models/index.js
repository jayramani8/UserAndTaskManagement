// const {Sequelize,DataTypes} = require('sequelize');
// const users = require('./users');
// // const { FORCE } = require('sequelize/types/index-hints');

// const sequilize = new Sequelize ("AdminManagement","root","Root@123456",{
//     host:'localhost',
//     dialect:'mysql'
// });
// sequilize.authenticate()
// .then(()=>{
//     console.log("connect")
// })
// .catch(err=>{
// console.log("not Connnect",err)
// });

// const db = {};
// db.Sequelize = Sequelize;
// db.sequilize = sequilize;

// db.users = require("./users")(sequilize);
// db.sequilize.sync()
// .then(()=>{
//     console.log("created");
// })
// module.exports = db;




const express = require("express");

const app = express();

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("AdminManagement", "root", "Root@123456", {
  dialect: "mysql",
  host: "localhost",
});

const User = sequelize.define("users", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
     firstname:{
         type:Sequelize.STRING
     },
     lastname:{
        type:Sequelize.STRING
    },
    email:{
        type:Sequelize.STRING
    },
    status:{
        type:Sequelize.STRING
    },
    task:{
        type:Sequelize.STRING,
        defaultValue:0
    },
 
},{
    timestamps:false

});

sequelize
  .sync()
  .then((result) => {
    app.listen(8000);
    console.log("connect");
  })
  .catch((err) => console.log(err));

  module.exports = User;