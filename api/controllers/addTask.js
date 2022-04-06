const db = require("../models/index");
const Task = db.Task;
const user = db.User;

// const Tasks = db.task;

const task = async (req, res) => {
  try {
    console.log(req.body.assignUser);
    const taskData = {
      title: req.body.title,
      assignUser: req.body.assignUser,
      CompletionDate: req.body.CompletionDate,
      status: req.body.assignUser === "" ? "open" : "assign",
    };
    console.log(taskData);
    await Task.create(taskData);
    res.send("created");
    return res.status(200).json();
  } catch (err) {
    console.log(err);
  }

  // const data  = await db.findAll({});
  // console.log(data);
};
module.exports = {
  task,
};
