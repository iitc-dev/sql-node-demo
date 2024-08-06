const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

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

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/employees", (req, res) => {
  const sql = "SELECT * FROM employees";
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json(result);
  });
});

app.post("/employees", (req, res) => {
  const newEmployee = req.body;
  const sql = "INSERT INTO employees SET ?";
  db.query(sql, newEmployee, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send("User added");
  });
});

app.put("/employees/:id", (req, res) => {
  const id = req.params.id;
  const updatedEmployee = req.body;
  const sql = "UPDATE employees SET ? WHERE emp_id = ?";
  db.query(sql, [updatedEmployee, id], (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json(result);
  });
});

app.delete("/employees/:id", (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM employees WHERE emp_id = ?";
  db.query(sql, id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send("User deleted");
  });
});

const PORT = 5500;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
