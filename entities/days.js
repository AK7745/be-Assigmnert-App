import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import  Pricing  from "./pricing.js";

const Days = sequelize.define("Days", {
  days: DataTypes.STRING,
  deleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});
Days.hasMany(Pricing,{as:'days'});
export default Days;
