const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Welcome to my api!");
});

app.listen(PORT, () => {
  console.log(`Runnning on port ${PORT}`);
});