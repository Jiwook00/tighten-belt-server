const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    static associate(db) {
      this.hasMany(db.accounts, {
        foreignKey: "user_id",
        sourceKey: "id",
      });
    }
  }

  users.init(
    {
      name: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      nickname: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      target: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 300000,
      },
      current: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "users",
      timestamps: true,
    }
  );
  return users;
};
