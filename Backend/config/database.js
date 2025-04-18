const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config();

// Database Configuration
const db = mysql.createConnection({
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME,
    port: process.env.DB_PORT
});

// Check Database Connection/ Authentication
db.connect((err) => {
    if(err){
        console.log("Database Connection Failed!", err);
    }else{
        console.log("Database Connected Successfully...");
    }
});


module.exports = db;
