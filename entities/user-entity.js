import {DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

const User = sequelize.define('User', {
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  deleted:{
    type:DataTypes.BOOLEAN,
    defaultValue:false
}
});

export {User} 