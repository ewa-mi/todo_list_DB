"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Jimmy Jung",
          email: "jimjung@gmail.com",
          phone: 1234537,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lea Lee",
          email: "lelee@gmail.com",
          phone: 1234567,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
