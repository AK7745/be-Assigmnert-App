import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

const ContactUs=sequelize.define('ContactUs',{
    name:DataTypes.STRING,
    email:DataTypes.STRING,
    phoneNumber:DataTypes.STRING,
    description:DataTypes.STRING,
    deleted:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
    }
})

export default ContactUs