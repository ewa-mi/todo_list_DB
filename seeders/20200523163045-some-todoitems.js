"use strict";

const Todolist = require("../models").todolist;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const leaList = await Todolist.findOne({
      where: {
        name: "Lea list",
      },
    });

    const jimmyList = await Todolist.findOne({
      where: {
        name: "Jimmy list",
      },
    });

    return queryInterface.bulkInsert(
      "todoitems",
      [
        {
          task: "clean kitchen",
          deadline: "today",
          important: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          todolistId: leaList.id,
        },
        {
          task: "feed dog",
          deadline: "tomorrow",
          important: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          todolistId: jimmyList.id,
        },
        {
          task: "feed cat",
          deadline: "asap",
          important: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          todolistId: jimmyList.id,
        },
        {
          task: "learn Mandarin",
          deadline: "asap",
          important: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          todolistId: leaList.id,
        },
        {
          task: "learn Math",
          deadline: "tonight",
          important: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          todolistId: leaList.id,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("todoitems", null, {});
  },
};
