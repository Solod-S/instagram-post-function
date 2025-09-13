const express = require("express");
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Instagram automation server is running!");
});

module.exports = app;
