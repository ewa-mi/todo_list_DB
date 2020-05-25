"use strict";

const User = require("../models").user;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const jimmy = await User.findOne({
      where: {
        name: "Jimmy Jung",
      },
    });

    const lea = await User.findOne({
      where: {
        name: "Lea Lee",
      },
    });

    return queryInterface.bulkInsert(
      "todolists",
      [
        {
          name: "Jimmy list",
          createdAt: new Date(),
          updatedAt: new Date(),
          userid: jimmy.get("id"),
        },
        {
          name: "Lea list",
          createdAt: new Date(),
          updatedAt: new Date(),
          userid: lea.get("id"),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("todolists", null, {});
  },
};
