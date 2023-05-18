import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

const Subject = sequelize.define("Subject", {
  name: DataTypes.STRING,
  deleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

export default Subject;
