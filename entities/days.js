import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

const Days = sequelize.define("Days", {
  days: DataTypes.STRING,
  deleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

export default Days;
