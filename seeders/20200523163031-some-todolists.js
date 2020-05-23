"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "todolists",
      [
        {
          name: "Kate Mendes",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Danny Brown",
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
