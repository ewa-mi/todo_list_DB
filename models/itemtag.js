"use strict";
module.exports = (sequelize, DataTypes) => {
  const itemtag = sequelize.define(
    "itemtag",
    {
      todoitemId: DataTypes.INTEGER,
      tagId: DataTypes.INTEGER,
    },
    {}
  );
  itemtag.associate = function (models) {
    itemtag.belongsTo(models.todoitem);
    itemtag.belongsTo(models.tag);
  };
  return itemtag;
};
