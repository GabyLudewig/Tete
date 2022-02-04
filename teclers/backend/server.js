const express = require("express");
const cors = require("cors");
const app = express()
const sequelize = require("./database/conexion");
// const vistaUsuario = require("./back/APP/VIEWS/vistaUsuarios");
// const vistaAmigos = require('./back/APP/VIEWS/vistaAmigos');
//2-Seteamos urlencoded para capturar los datos del formulario
app.use(express.json());
app.use(cors());


//3-Invocamos a dotenv
const dotenv = require("dotenv");
dotenv.config();

async function serverStart (){

    try{
    
    app.listen(3001,(req, res)=>{
       console.log(`System Start in: http://localhost:3001`)
    })
}catch(error) {
    console.log(error)
    console.error('SQL error conection')
}}
serverStart ();
// vistaUsuario(app);
// vistaAmigos(app);