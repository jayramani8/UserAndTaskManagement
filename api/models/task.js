// // const con = require("./index")
// // const sequilize = con.sequelize;
// // const DataTypes = con.DataTypes;

// // const model = (sequilize,DataTypes)=>{
// //   const Tasks = sequilize.define("tasks", {
// //     id: {
// //         allowNull: false,
// //         autoIncrement: true,
// //         primaryKey: true,
// //         type: DataTypes.INTEGER,
// //       },
// //      title:{
// //          type:DataTypes.STRING
// //      },
// //      assignUser:{
// //         type:DataTypes.STRING
// //     },
// //     CompletionDate:{
// //         type:DataTypes.STRING
// //     },
    
// //     status:{
// //         type:DataTypes.STRING,
// //         defaultValue:'pending'
// //     },
 
// // },{
// //     timestamps:false

// // });

// // sequelize
// //   .sync()
// //   .then((result) => {
// //     app.listen(8000);
// //     console.log("connect");
// //   })
// //   .catch((err) => console.log(err));
// // }
// //   exports.Tasks = model.Tasks;



// const express = require("express");

// const app = express();

// const { Sequelize, DataTypes } = require("sequelize");

// const sequelize = new Sequelize("AdminManagement", "root", "Root@123456", {
//   dialect: "mysql",
//   host: "localhost",
// });

// // module.exports(Sequelize)=>{
  
// // }
// const Task = sequelize.define("tasks", {
//     id: {
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//         type: Sequelize.INTEGER,
//       },
//      title:{
//          type:Sequelize.STRING
//      },
//      assignUser:{
//         type:Sequelize.STRING
//     },
//     CompletionDate:{
//         type:Sequelize.STRING
//     },
    
//     status:{
//         type:Sequelize.STRING,
//         defaultValue:'pending'
//     },
 
// },{
//     timestamps:false

// });
// sequelize
//   .sync()
//   .then((result) => {
//     app.listen(8000);
//     console.log("connect");
//   })
//   .catch((err) => console.log(err));

//   module.exports = Task;