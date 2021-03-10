var express = require('express');
const loginRouter = express.Router();
const mysqlConnection = require('../connection');
const jwt = require("jsonwebtoken");

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;

//Router
loginRouter.route('/login')
    .post((req, res) => {

        const { username, password } = req.body;
        const sql = `SELECT * FROM login WHERE user_name ='${username}' AND user_password ='${password}';`;

        mysqlConnection.query(sql, (err, rows, fields) => {
            if (!err) {

                if (rows) {
                    const accessToken = jwt.sign({username: rows[0].user_name, role: rows[0].role}, accessTokenSecret);

                    res.json({accessToken});
                } else {
                    res.send("Username or password incorrect");
                }

            } else {
                console.log(err);
            }
        });
    });


module.exports = loginRouter;