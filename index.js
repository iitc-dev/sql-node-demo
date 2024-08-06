const express = require("express");
const cors = require("cors");

const app = express();
const employeesRoutes = require("./routes/employeesRoutes");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/employees", employeesRoutes);

const PORT = 5500;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
