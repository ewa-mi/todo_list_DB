"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "itemtags",
      [
        {
          tagId: 1,
          todoitemId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 2,
          todoitemId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 3,
          todoitemId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 2,
          todoitemId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 3,
          todoitemId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("itemtags", null, {});
  },
};
