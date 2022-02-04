const express = require("express");
const cors = require("cors");
require("dotenv").config();
const sql = require("./database/conexion");
const app = express();

//Views
const user = require("./view/user");

//Midlewares
app.use(express.json());
app.use(cors());


async function serverStart (){

    try{
    await sql.authenticate();
    app.listen(3001,(req, res)=>{
       console.log(`System Start in: http://localhost:3001`)
    })
}catch(error) {
    console.log(error)
    console.error('SQL error conection')
}}
serverStart ();

user(app);