const { request, response } = require("express");
const Usuarios = require("../models/usuarios");
const { dbConnection } = require('../dbConnection/connection');

const putUsuario = async(req = request, res = response) => {
  try {
    await dbConnection();
    const { id } = req.params; 
    const { nombre, telefono, email} = req.body;

    const usuario = await Usuarios.findByIdAndUpdate(id, {nombre, telefono, email});

    if (!usuario) {
      return res.status(404).json({
        msg: "Usuario no encontrado",
      });
    }

      res.status(200).json({
        msg: "USUARIO ACTUALIZADO CORRECTAMENTE",
        usuario
      });
    
    
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Ocurrió un ERROR",
    });
  }
};

module.exports = putUsuario;
