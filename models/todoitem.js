"use strict";
module.exports = (sequelize, DataTypes) => {
  const todoitem = sequelize.define(
    "todoitem",
    {
      task: DataTypes.STRING,
      deadline: DataTypes.STRING,
      important: DataTypes.BOOLEAN,
      todolistId: DataTypes.INTEGER,
    },
    {}
  );
  todoitem.associate = function (models) {
    todoitem.belongsTo(models.todolist);
    todoitem.belongsToMany(models.tag, {
      through: "itemtags",
      foreignKey: "todoitemId",
    });
  };
  return todoitem;
};
