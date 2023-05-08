import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import  Pricing  from "./pricing.js";

const Level = sequelize.define("Level", {
  level: DataTypes.STRING,
  deleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});
Level.hasMany(Pricing,{as:'pricing'});
export default Level;
