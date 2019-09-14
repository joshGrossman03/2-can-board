module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define("Todo", {
    title: DataTypes.STRING,
    category: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.STRING
  });
  return Todo;
};
