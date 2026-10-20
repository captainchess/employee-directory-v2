import express from "express";


const app = express();
export default app;

app.get("/", (req, res) => {
  res.send("Hello employees!");
});

// Error handling middleware

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Oops! Something went wrong!");
});
