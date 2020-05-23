"use strict";
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      name: DataTypes.STRING,
      email: { type: DataTypes.STRING, allowNull: false, unique: true },

      phone: DataTypes.INTEGER,
    },
    {}
  );
  user.associate = function (models) {
    // associations can be defined here
  };
  return user;
};
