const { Op } = require("sequelize");
const db = require("../models/index");
const task = db.Task;
const User = db.User;

const fetchTask = async (req, res) => {
  try {
    const item = req.body;
    const limit = 2;
    let pageNumber = 0;
    console.log(item.pageNo);
    if (item.pageNo) {
      pageNumber = item.pageNo - 1;
    }
    let search = {};
    if (item.searchTask) {
      search = {
        title: {
          [Op.like]: "%" + item.searchTask + "%",
        },
      };
    }

    let sortTask = [];
    console.log(item);
    if (item.sortTask) {
      if (item.order) {
        sortTask.push([item.sortTask, "ASC"]);
      } else {
        sortTask.push([item.sortTask, "DESC"]);
      }
    }
    const data = await task.findAndCountAll({
      include: [
        {
          model: User,
        },
      ],
      where: search,
      order: sortTask,
      limit: limit,
      offset: pageNumber * limit,
    });
    const page = Math.ceil(data.count / limit);
    await res.send({ data, page });
  } catch (err) {
    console.log(err);
  }
};
module.exports = { fetchTask };
