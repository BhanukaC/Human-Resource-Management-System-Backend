const mysql = require('mysql');

const db = mysql.createConnection({
    user: admin,
    host: hr.cu11gcggg3b7.us-east-1.rds.amazonaws.com,
    port: 3306,
    password: adminPassword,
    database: hr
});

module.exports = db;
