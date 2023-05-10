import {DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

const Blog = sequelize.define('Blog', {
  title: DataTypes.STRING,
  meta_img: {
    type:DataTypes.STRING,
    allowNull:true
  },
  description:DataTypes.STRING,
  author_name:DataTypes.STRING,
  banner:{
    type:DataTypes.STRING,
    allowNull:true
  },
  like:DataTypes.STRING,
  meta_description:DataTypes.STRING,
  meta_title:DataTypes.STRING,
  slug:DataTypes.STRING,
  deleted:{
    type:DataTypes.BOOLEAN,
    defaultValue:false
}
});

export {Blog}
