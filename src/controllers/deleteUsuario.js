const { dbConnection } = require("../dbConnection/connection");
const Usuario = require("../models/usuarios");



const deleteUsuario = async(req, res) => {
    await dbConnection();

    const { id } = req.params;

    const usuario = await Usuario.findByIdAndUpdate(id, { verify: false })

    res.json({
        msg: 'Usuario Eliminado',
        usuario
    })

}

module.exports = deleteUsuario;