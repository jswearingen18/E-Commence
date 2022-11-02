const { Model, DataTypes } = require("sequelize");
// Sets up connection to sequelize
const sequelize = require("../config/connection.js");

class Tag extends Model {}
// Model framework used in conjunction with Product tag seed to initialize the data
Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "tag",
  }
);

module.exports = Tag;
