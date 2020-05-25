"use strict";
module.exports = (sequelize, DataTypes) => {
  const todolist = sequelize.define(
    "todolist",
    {
      name: DataTypes.STRING,
    },
    {}
  );
  todolist.associate = function (models) {
    todolist.belongsTo(models.user);
  };
  return todolist;
};
