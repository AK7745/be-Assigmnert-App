import dotenv from 'dotenv';
dotenv.config();

export const PORT=process.env.PORT || 4000
export const WEB_TOKEN_SECRET=process.env.WEB_TOKEN_SECRET
export const USER_EMAIL_NODE_MAILER=process.env.USER_EMAIL_NODE_MAILER
export const USER_PASS_NODE_MAILER=process.env.USER_PASS_NODE_MAILER
export const HOST=process.env.HOST  || 'localhost'
export const DIALECT=process.env.DIALECT || 'mysql'
export const DATABASENAME=process.env.DATABASENAME || 'testing'
export const DB_USER_NAME=process.env.DB_USER_NAME || 'root'
export const DB_PASS=process.env.DB_PASS || 'root'
export const NODE_MAILER_SERVICE=process.env.NODE_MAILER_SERVICE
export const MAIL_SECRET_KEY=process.env.MAIL_SECRET_KEY