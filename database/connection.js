import mysql from "mysql2";
import config from "dotenv/config";
const db = mysql
  .createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    connectTimeout: process.env.CONNECTION,
  })
  .promise();
export { db };
