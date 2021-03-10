const express = require("express");
const mysql = require('mysql');
const bodyParser = require('body-parser');

const mysqlConnection = require('./connection');

const app = express();
app.use(bodyParser.json());

const bookRouter = express.Router();
const PORT = process.env.PORT || 3000;

//Router
bookRouter.route('/books')
  .get((req, res) => {
    mysqlConnection.query("SELECT * from books", (err, rows, fields) => {
      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
      }
    });
  });

app.use('/api', bookRouter);

app.get("/", (req, res) => {
  res.send("Welcome to my api!");
});

app.listen(PORT, () => {
  console.log(`Runnning on port ${PORT}`);
});