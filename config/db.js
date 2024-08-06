const mysql = require("mysql2");
const createEmployeesTable = require("./schema/createEmployeesTable");

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "1234",
  database: "test",
});

db.connect((err) => {
  if (err) {
    console.log(err);
  }
  console.log("Connected to MySQL database");
  createEmployeesTable(db);
});

module.exports = db;
