module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define("Todo", {

    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }

  });
  return Todo;
};
