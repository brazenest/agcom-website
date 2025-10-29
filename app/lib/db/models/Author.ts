import { DataTypes, Sequelize } from "sequelize";

export const Author = (sequelize: Sequelize) => sequelize.define(
  'Author',
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
  },
)
