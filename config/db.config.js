require('dotenv').config({path:'./.env'})
'use strict';
const mysql = require('mysql');

const HOST = process.env.HOST
const USER = process.env.USER
const PWD = process.env.PWD
const DB = process.env.DB

// mysql db connection
const dbConn = mysql.createConnection({
  host     : HOST,
  user     : USER,
  password : PWD,
  database : DB
});
dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});
module.exports = dbConn;