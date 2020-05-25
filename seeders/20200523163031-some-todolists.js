"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "todolists",
      [
        {
          name: "Jimmy Jung",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lea Lee",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("todolists", null, {});
  },
};
