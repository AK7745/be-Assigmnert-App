import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

const Pricing=sequelize.define('Pricing',{
    days:DataTypes.DECIMAL,
    level:DataTypes.STRING,
    price:DataTypes.DECIMAL
})

export  {Pricing}