const { request, response } = require("express");
const emailService = require('../utils/emailService');

const postEnvioEmail = async(req = request, res = response) => {
  const {to, subject, text} = req.body;

  try {
    await emailService.sendMail(to, subject, text);

    res.status(200).json({
        message: "Correo enviado exitosamente",
    })

  } catch (error) {
    res.status(500).json({
      message: "Error al enviar el correo",
    });
  }
};

module.exports = postEnvioEmail