import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

const Info = sequelize.define("Info", {
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  contact: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  facebooklink: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  instagramlink: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  linkedin: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  whatsapplink: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  twitterlink: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  deleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

export default Info;
