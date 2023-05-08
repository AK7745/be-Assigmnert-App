import {DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

const Blog = sequelize.define('Blog', {
  title: DataTypes.STRING,
  thumbnail_img: DataTypes.STRING,
  description:DataTypes.STRING,
  author_name:DataTypes.STRING,
  banner:DataTypes.STRING,
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
