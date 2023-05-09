import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";


const Pricing=sequelize.define('Pricing',{

    price:DataTypes.DECIMAL,
    deleted:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
    }
})
  
export default Pricing