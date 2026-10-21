import express from "express";

const app = express();
export default app;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello employees!");
});

// Route middleware
import employeesRouter from "./api/employees.js";
app.use("/employees", employeesRouter);

// Error handling middleware

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Oops! Something went wrong!");
});
