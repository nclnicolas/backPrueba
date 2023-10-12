const express = require('express');
const getDatosUsuarios = require('../controllers/getDatosUsuarios');
const getUsuario = require('../controllers/getUsuario');
const putUsuario = require('../controllers/putUsuario');
const postCargaUsuarios = require('../controllers/postCargaUsuarios');
const deleteUsuario = require('../controllers/deleteUsuario');
const connection = require('../dbConnection/connection');
const { validarCampos } = require('../middlewares/validar-campos');

const router = express.Router();

router.get('/', async(req, res) => {
    res.send('CONECTADO AL SERVICIO')
})

router.get(
    '/datos/usuarios',
    validarCampos, 
    getDatosUsuarios
);

router.get(
    '/datos/usuarios/:id',
    validarCampos,
    getUsuario
);

router.put(
    '/datos/usuarios/:id',
    validarCampos,
    putUsuario
)

router.post(
    '/datos/usuarios',
    validarCampos,
    postCargaUsuarios
)

router.delete(
    '/datos/usuarios/:id',
    validarCampos,
    deleteUsuario
)

module.exports = router;
