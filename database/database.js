import Sequelize from'sequelize';
import { DATABASENAME, DB_PASS, DB_USER_NAME, DIALECT, HOST } from '../constants.js';
export const sequelize = new Sequelize(DATABASENAME, DB_USER_NAME, DB_PASS, {
  host: HOST,
  dialect:  DIALECT, 
  
  
});

export const connectDB = async ()=>{
  try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}}

// sequelize.sync({alter:true})
//   .then(() => {
//     console.log('Tables synced successfully');
//   })
//   .catch((error) => {
//     console.error('Error syncing tables: ', error);
//   });

