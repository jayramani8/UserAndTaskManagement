// // const { DataTypes } = require("sequelize/types");
// "use strict";
const Sequelize = require("sequelize");
const { users } = require(".");
// const { users } = require(".");


module.exports = (sequilize) => { 
    const Users = sequilize.define("users",{
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
        type:Sequelize.STRING
    },
    },{
        timestamps:false
    });
    
}