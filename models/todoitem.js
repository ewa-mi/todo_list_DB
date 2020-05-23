"use strict";
module.exports = (sequelize, DataTypes) => {
  const todoitem = sequelize.define(
    "todoitem",
    {
      task: DataTypes.STRING,
      deadline: DataTypes.STRING,
    },
    {}
  );
  todoitem.associate = function (models) {
    // associations can be defined here
  };
  return todoitem;
};
