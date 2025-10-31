import { DataTypes, Sequelize } from "sequelize";
import { Author } from "./Author";

export const Article = (sequelize: Sequelize) => sequelize.define(
  'Article',
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    body: {
        type: DataTypes.TEXT,
        allowNull: false,
        references: {
            model: Author,
            key: 'id',
        }
    },
    author: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    datePublished: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
    },
    tags: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    visible: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    excerpt: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
  },
  {
    // Other model options go here
    tableName: 'articles',
  },
);
