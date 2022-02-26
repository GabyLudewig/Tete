const Joi = require('joi')

//Exporto el modelo
module.exports = {
    modelologin: Joi.object().keys({
        email: Joi.required(),

        contraseña: Joi.string().regex(/^[a-zA-Z0-9]{6,16}$/).min(6).required() //utilizo expresiones regulares
    }).with('email', 'contraseña'),// Si existe pass tb debe existir el usuario

    modeloCrearUsuario: Joi.object().keys({
        nombre: Joi.required(),
        apellido: Joi.string().min(1).max(50).required(),
        email: Joi.string().email().required(),
        ciudad: Joi.required(),
        pais: Joi.required(),
        estudios: Joi.required(),
        idiomas: Joi.required(),
        conocimientos_extra: Joi.required(),
        linkedin: Joi.required(),
        hobbies: Joi.required(),
        fecha_nac: Joi.required(),
        password: Joi.string().regex(/^[a-zA-Z0-9]{6,16}$/).min(6).required(), //utilizo expresiones regulares
    })
}