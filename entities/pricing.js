import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";


const Pricing=sequelize.define('Pricing',{

    price:DataTypes.DECIMAL,
    daysId:DataTypes.INTEGER,
    levelId:DataTypes.INTEGER,
    deleted:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
    }
})
  
export default Pricing