const { request, response } = require("express");
const Usuarios = require("../models/usuarios");
const {dbConnection} = require('../dbConnection/connection');

const getUsuario = async(req = request, res = response) => {
  try {
    await dbConnection();
    const { id } = req.params; 
    const usuario = await Usuarios.findById(id)

    if (!usuario) {
      return res.status(404).json({
        msg: "Usuario no encontrado",
      });
    }

      res.status(200).json({
        usuario
      });
  
    
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Ocurrió un ERROR",
    });
  }
};

module.exports = getUsuario;
