import {DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

const Order = sequelize.define('Order', {
  documentId: DataTypes.INTEGER,
  subjectId: {
    type:DataTypes.INTEGER,
    allowNull:false
  },
  daysId:{
    type:DataTypes.INTEGER,
    allowNull:false
  },
  levelId:{
    type:DataTypes.INTEGER,
    allowNull:false
  },
  name:{
    type:DataTypes.STRING,
    allowNull:false
  },
  email:{
    type:DataTypes.STRING,
    allowNull:false
  },
  phoneNumber:{
    type:DataTypes.STRING,
    allowNull:false
  },
  country:{
    type:DataTypes.STRING,
    allowNull:true
  },
  deleted:{
    type:DataTypes.BOOLEAN,
    defaultValue:false
}
});

export {Order}
