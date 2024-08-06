const createEmployeesTable = (db) => {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS employees (
        emp_id INT PRIMARY KEY,
        emp_name VARCHAR(20),
        job_name VARCHAR(20),
        manager_id INT,
        hire_date DATETIME,
        salary INT,
        commission INT,
        dep_id INT
    );
`;

  db.query(createTableQuery, (err, result) => {
    if (err) {
      throw err;
    }
    console.log("Employees table ensured to exist.");
  });
};

module.exports = createEmployeesTable;
