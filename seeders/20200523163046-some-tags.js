"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "tags",
      [
        {
          title: "Week day",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Weekend",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Personal",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("tags", null, {});
  },
};
