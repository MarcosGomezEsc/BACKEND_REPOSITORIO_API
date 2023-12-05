import mysql from "mysql2/promise";
const dbConfig = {
  host: "127.0.0.1",
  user: "root",
  password: "admin",
  port: 3306,
  database: "autos_nuevos",
};
// una conexión se establece cada vez que se necesita conectar con la DB
export const connection = mysql.createPool(dbConfig);
