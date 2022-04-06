// const {Sequelize,DataTypes} = require('sequelize');
// const task = require('./task');
// // const task = require('./task');

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

// // db.task = require("./task")(sequilize,DataTypes);
// db.sequilize.sync()
// .then(()=>{
//     console.log("created");
// })
// exports.db=db;
// exports.sequilize=sequilize;
// exports.DataTypes=DataTypes;

const express = require("express");

const app = express();

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("AdminManagement", "root", "Root@123456", {
  dialect: "mysql",
  host: "localhost",
});

const User = sequelize.define(
  "users",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    firstname: {
      type: Sequelize.STRING,
    },
    lastname: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
  }
);

const Task = sequelize.define(
  "tasks",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    title: {
      type: Sequelize.STRING,
    },
    assignUser: {
      type: Sequelize.INTEGER,
    },
    CompletionDate: {
      type: Sequelize.STRING,
    },

    status: {
      type: Sequelize.STRING,
      defaultValue: "open",
    },
  },
  {
    timestamps: false,
  }
);

const Login = sequelize.define(
  "adminlogin",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    token: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
  }
);
// const db = {};
// db.Sequelize = Sequelize;
// db.sequilize = sequilize;

// db.users = require("./users")(sequilize);
sequelize
  .sync()
  .then((result) => {
    app.listen(8000);
    console.log("connect");
  })
  .catch((err) => console.log(err));

User.hasMany(Task, { foreignKey: "assignUSer" });
Task.belongsTo(User, { foreignKey: "assignUser" });
//   User.hasOne(Task,{foreignKey:'assignUser'})
//   Task.belongsTo(User);

exports.User = User;
exports.Task = Task;
exports.Login = Login;
exports.sequelize = sequelize;
