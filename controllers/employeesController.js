const db = require("../config/db");

exports.getAllEmployees = (req, res) => {
  const sql = "SELECT * FROM employees";
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json(result);
  });
};

exports.addEmployee = (req, res) => {
  const newEmployee = req.body;
  const sql = "INSERT INTO employees SET ?";
  db.query(sql, newEmployee, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send("User added");
  });
};

exports.updateEmployee = (req, res) => {
  const id = req.params.id;
  const updatedEmployee = req.body;
  const sql = "UPDATE employees SET ? WHERE emp_id = ?";
  db.query(sql, [updatedEmployee, id], (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json(result);
  });
};

exports.deleteEmployee = (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM employees WHERE emp_id = ?";
  db.query(sql, id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send("User deleted");
  });
};
