const express = require("express");
const mysql = require('mysql');
const bodyParser = require('body-parser');
const bookRouter = require('./routes/bookRouter');
const loginRouter = require('./routes/loginRouter');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.use('/api', loginRouter);
app.use('/api', bookRouter);

app.get("/", (req, res) => {
  res.send("Welcome to my api!");
});

app.listen(PORT, () => {
  console.log(`Runnning on port ${PORT}`);
});