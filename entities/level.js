import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

const Level = sequelize.define("Level", {
  level: DataTypes.STRING,
  deleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});
export default Level;
