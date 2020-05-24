"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "todoitems",
      [
        {
          task: "clean kitchen",
          deadline: "today",
          important: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "feed dog",
          deadline: "tomorrow",
          important: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("todoitems", null, {});
  },
};
