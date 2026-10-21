import {
  getEmployee,
  getEmployees,
  getRandomEmployee,
  addEmployee,
} from "#db/employees";

import express from "express";
const router = express.Router();
export default router;

router.get("/", (req, res) => {
  const employees = getEmployees();
  res.send(employees);
});

// Note: this middleware has to come first! Otherwise, Express will treat
// "random" as the argument to the `id` parameter of /employees/:id.
router.get("/random", (req, res) => {
  const employee = getRandomEmployee();
  res.send(employee);
});

router.post("/", (req, res) => {
  console.log(req.body);
  if (!req.body) return res.status(400).send("Request must have a body.");

  const { name } = req.body;

  if (!name) return res.status(400).send("Must send a proper name.");

  const data = addEmployee(name);

  return res.status(201).send(data);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  // req.params are always strings, so we need to convert `id` into a number
  // before we can use it to find the employee
  const employee = getEmployee(+id);

  if (!employee) {
    return res.status(404).send(`Employee #${id} not found.`);
  }

  res.send(employee);
});
