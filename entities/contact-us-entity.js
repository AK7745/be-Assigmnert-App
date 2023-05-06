import { DataTypes } from "sequelize";
import { sequelize } from "../database/database";

const ContactUs=sequelize.define('ContactUs',{
    name:DataTypes.STRING,
    email:DataTypes.STRING,
    phoneNumber:DataTypes.NUMBER,
    subject:DataTypes.STRING,
    detail:DataTypes.STRING
})

export default ContactUs