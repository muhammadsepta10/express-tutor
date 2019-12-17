'use strict';
module.exports = (sequelize, DataTypes) => {
  const categories = sequelize.define('categories', {
    category: DataTypes.STRING
  }, {});
  categories.associate = function(models) {
    // associations can be defined here
  };
  return categories;
};