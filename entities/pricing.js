import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import Level from "./level.js";
import Days from "./days.js";

const Pricing=sequelize.define('Pricing',{

    price:DataTypes.DECIMAL,
    deleted:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
    }
})
Pricing.belongsTo(Level, {
    foreignKey: "pricingId",
    as: "pricing",
  })

  Pricing.belongsTo(Days, {
    foreignKey: "pricingId",
    as: "pricing",
  })  
export default Pricing