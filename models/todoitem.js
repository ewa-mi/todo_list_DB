"use strict";
module.exports = (sequelize, DataTypes) => {
  const todoitem = sequelize.define(
    "todoitem",
    {
      task: DataTypes.STRING,
      deadline: DataTypes.STRING,
      important: DataTypes.BOOLEAN,
      todolistid: DataTypes.INTEGER,
    },
    {}
  );
  todoitem.associate = function (models) {
    todoitem.belongsTo(models.todolist);
  };
  return todoitem;
};
