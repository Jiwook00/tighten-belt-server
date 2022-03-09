const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class accounts extends Model {
    static associate(db) {
      this.belongsTo(db.users, {
        foreignKey: "user_id",
        targetKey: "id",
      });
    }
  }
  accounts.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      item: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      expense: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "accounts",
      timestamps: true,
    }
  );
  return accounts;
};
