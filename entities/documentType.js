import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

const documentType=sequelize.define('documentType',{
    name:DataTypes.STRING,
    deleted:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
    }
})

export default documentType