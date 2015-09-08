var mysql = require('mysql');
var logger = require('../lib/logger').logger;

exports.db = {
    "connect" : function() {
        this.conn = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '123456',
            database:'question',
            port: 3306
        });
        this.conn.connect();
    },
    "table" : function() {

    },
    "fields" : function() {

    },
    "where" : function() {

    },
    "find": function(email, pass) {
        this.connect();
        this.conn.query('select * from manager', function(err, rows, fields) {
            if (err) {
                logger.echo('mysql throw err :' + err.toString());
            }
            console.log('The solution is: ', rows[0]);
        });
    },
    "select": function() {

    },
    "update" : function() {

    },
    "delete" : function() {

    },
    "limit" : function() {

    },
    "count" : function() {

    },
    "close" : function() {
        conn.end();
    }

}