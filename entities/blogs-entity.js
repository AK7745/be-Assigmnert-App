import {DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

const Blog = sequelize.define('Blog', {
  title: DataTypes.STRING,
  image: DataTypes.TEXT('long'),
  description:DataTypes.STRING
});

export {Blog}