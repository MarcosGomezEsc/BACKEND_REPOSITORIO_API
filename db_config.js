import mysql from "mysql2/promise";
const dbConfig = {
  host: "bcjfwwnqxexhx6twicz0-mysql.services.clever-cloud.com",
  user: "ucqupnto3aen1lfv",
  password: "YghXIHdFhSsJbhpOyMhN",
  port: 3306,
  database: "bcjfwwnqxexhx6twicz0",
};
// una conexión se establece cada vez que se necesita conectar con la DB
export const connection = mysql.createPool(dbConfig);
