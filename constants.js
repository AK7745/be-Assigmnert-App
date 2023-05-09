import dotenv from 'dotenv';
dotenv.config();

export const DB_HOST = 'localhost';
export const DB_PORT = 3306;
export const DB_USERNAME = 'root';
export const DB_PASSWORD = 'root';
export const DB_NAME = 'node_crud_with_typeorm_mysql';
export const PORT=process.env.PORT || 3000
export const WEB_TOKEN_SECRET=process.env.WEB_TOKEN_SECRET
export const USER_EMAIL_NODE_MAILER=process.env.USER_EMAIL_NODE_MAILER
export const USER_PASS_NODE_MAILER=process.env.USER_PASS_NODE_MAILER
