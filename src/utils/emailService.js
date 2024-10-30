const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ncl.enriquez@gmail.com",
    pass: "erfp ndet chhx ammy",
  },
});

const sendMail = async (to, subject, text) => {
  const mailOptions = {
    from: "ncl.enriquez@gmail.com",
    to,
    subject,
    text,
  };

  return transporter.sendMail(mailOptions);
};

module.exports = { sendMail };
