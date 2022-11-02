const { Model, DataTypes } = require("sequelize");
// Sets up connection to sequelize 
const sequelize = require("../config/connection.js");

class Category extends Model {}
// Model framework used in conjunction with category seed to initialize the data
Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "category",
  }
);

module.exports = Category;
