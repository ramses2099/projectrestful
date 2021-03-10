var express = require('express');
const bookRouter = express.Router();
const mysqlConnection = require('../connection');

//Router
bookRouter.route('/books')
    .get((req, res) => {
        mysqlConnection.query("SELECT * FROM books", (err, rows, fields) => {
            if (!err) {
                res.send(rows);
            } else {
                console.log(err);
            }
        });
    });

bookRouter.route('/books/:id')
    .get((req, res) => {
        const { id } = req.params; //desectruturamos
        const sql = `SELECT * FROM books where id = ${id}`;

        mysqlConnection.query(sql, (err, rows, fields) => {
            if (!err) {
                res.send(rows);
            } else {
                console.log(err);
            }
        });
    });

bookRouter.route('/books')
    .post((req, res) => {
        const { title, genre, author, reading } = req.body;
        const sql = `INSERT INTO books( title, genre,author, reading) VALUES ('${title}','${genre}','${author}', ${reading});`;

        mysqlConnection.query(sql, (err, rows, fields) => {
            if (!err) {
                res.status(201).send('Books create correctly');
            } else {
                console.log(err);
            }
        });
    });

bookRouter.route('/books/:id')
    .put((req, res) => {
        const { id } = req.params; //desectruturamos
        const { title, genre, author, reading } = req.body;
        const sql = `UPDATE books SET
                        title ='${title}',
                        genre ='${genre}',
                        author = '${author}',
                        reading = '${reading}'
                    WHERE id = ${id}`;

        mysqlConnection.query(sql, (err, rows, fields) => {
            if (!err) {
                res.status(201).send('Books update correctly');
            } else {
                console.log(err);
            }
        });
    });

bookRouter.route('/books/:id')
    .delete((req, res) => {
        const { id } = req.params; //desectruturamos
        const sql = `DELETE FROM books where id = ${id}`;

        mysqlConnection.query(sql, (err, rows, fields) => {
            if (!err) {
                res.send('Books delete correctly');
            } else {
                console.log(err);
            }
        });
    });


module.exports = bookRouter;