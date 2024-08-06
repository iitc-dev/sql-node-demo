const mysql = require("mysql2");

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
});

module.exports = db;
