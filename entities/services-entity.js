import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

const Service = sequelize.define("Service", {
  title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  meta_img: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  description: {
    type: DataTypes.TEXT("medium"),
    allowNull: false,
  },
  author_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  meta_description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  meta_title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  slug: DataTypes.STRING,
  img_alt:{
    type:DataTypes.STRING,
    allowNull:true,
    default:null
  },
  sub_description:{
    type:DataTypes.STRING,
    allowNull:true,
  },
  sub_description:{
    type:DataTypes.STRING,
    allowNull:true,
  },
  deleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

export { Service };
