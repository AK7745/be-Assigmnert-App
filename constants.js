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
export const CAPCHA_SECRET_KEY=process.env.CAPCHA_SECRET_KEY
export const CAPCHA_URL=process.env.CAPCHA_URL
export const NODE_ENV=process.env.NODE_ENV
export const SSL_CERT_PATH=process.env.SSL_CERT_PATH
export const SSL_KEY_PATH=process.env.SSL_KEY_PATH


