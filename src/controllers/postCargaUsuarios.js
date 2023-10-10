const { request, response } = require("express");
const Usuarios = require("../db/usuarios");
const Usuario = require("../models/usuarios");
const {dbConnection} = require('../dbConnection/connection');

const postCargaUsuarios = async(req = request, res = response) => {
  try {
    await dbConnection();
    const { nombre, email, telefono, verify = true } = req.body;
    
    const nuevoUsuario = new Usuario({ nombre, email, telefono, verify });

    if( nombre === undefined || email === undefined || telefono === undefined ){
        return res.status(400).json({
            msg: "Los campos son obligatorios",
        })
    }

    await nuevoUsuario.save()

    res.status(200).json({
        msg: "CARGA EXITOSA",
        nuevoUsuario
    })


  } catch (error) {
    res.status(500).json({
      msg: "Ocurrio un ERROR",
    });
  }
};

module.exports = postCargaUsuarios