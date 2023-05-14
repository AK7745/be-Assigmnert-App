import {DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

const Blog = sequelize.define('Blog', {
  title: DataTypes.STRING,
  meta_img: {
    type:DataTypes.STRING,
    allowNull:true
  },
  description:DataTypes.TEXT('medium'),
  author_name:{
    type:DataTypes.STRING,
    allowNull:true
  },
  banner:{
    type:DataTypes.STRING,
    allowNull:true
  },
  like:{
    type:DataTypes.STRING,
    allowNull:true
  },
  meta_description:{
    type:DataTypes.STRING,
    allowNull:true
  },
  meta_title:{
    type:DataTypes.STRING,
    allowNull:true
  },
  slug:DataTypes.STRING,
  deleted:{
    type:DataTypes.BOOLEAN,
    defaultValue:false
}
});

export {Blog}
