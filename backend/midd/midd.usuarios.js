//IMPORTO LOS MODULOS NECESARIOS
const Joi = require('joi');
const { modelologin, modeloCrearUsuario } = require('./midd.modeloUsuarios');

module.exports.validarLogin = async (req,res,next)=>{
    try {
        await Joi.attempt(req.body, modelologin, 'Alguno de los datos no es correcto')
        return next()
    }catch(error){
        console.log(error)
        res.status(500).json(error.message)
    }
}

module.exports.validarDatosDeUsuario = async (req, res, next) =>{
    try {
        await Joi.attempt(req.body, modeloCrearUsuario, 'Alguno de los datos no es correcto')
        return next()
    }catch(error){
        console.log('validation ' + error)
        res.status(500).json(error)
    }
}


