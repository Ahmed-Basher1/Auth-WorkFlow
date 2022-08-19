const nodemailer = require('nodemailer');
const nodeMailConfig = require('./nodeMailerConfig');
const sendEmail = async ({ to, subject, html }) => {
  let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport(nodeMailConfig);

  return  transporter.sendMail({
    from: '"Admin website" <dev.ahmed.basher@gmail.com>', // sender address
    to, // list of receivers
    subject, // Subject line
    html, // html body
  });
};

module.exports = sendEmail;
