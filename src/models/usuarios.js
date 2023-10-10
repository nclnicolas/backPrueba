const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const UsuariosSchema = new Schema({
    nombre: String,
    email: String,
    telefono: Number,
    verify: Boolean,
});

UsuariosSchema.methods.toJSON = function() {
    const { __v, _id, verify, ...usuario  } = this.toObject();
    usuario.uid = _id;
    return usuario;
}

const Usuario = model('usuarios', UsuariosSchema)

module.exports = Usuario;