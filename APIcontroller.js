const { status } = require('init');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const { error } = require('console');
const { json } = require('stream/consumers');
const { connect } = require('http2');


const connection = mysql.createConnection({
    host: 'bmnukasn7p6ipqfbs4vj-mysql.services.clever-cloud.com',
    user: 'ulfsuypuoezn3yak',
    password: 'Z7qyykRcGJ0XrU0coiN5',
    port: 3306,
    database: 'bmnukasn7p6ipqfbs4vj'
});

connection.connect(function () {
    console.log('Database connected')
});

exports.dataget = (req, res) => {
    var data = 'select * from tbl_name';
    connection.query(data,
        function (err, results) {
            if (err) {
                res.end(JSON.stringify(err))

            } else {
                res.end(JSON.stringify(results))
            }
        }

    )
}

exports.insert = (req, res) => {
    var insertdata = "insert into tbl_name (name) values(?)";
    connection.query(insertdata,
        [
            req.body.name
        ],
        function (err, results) {
            if (err) {
                res.end(JSON.stringify(err))
            } else {
                res.end(JSON.stringify(results))
            }
        }
    )
}

