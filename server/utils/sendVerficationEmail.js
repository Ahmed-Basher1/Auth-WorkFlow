const sendEmail = require('./sendEmail');

const sendVerficationEmail = async ({
  name,
  email,
  verificationToken,
  origin,
}) => {
  const verfiyEmail = `${origin}/user/verify-email?token=${verificationToken}&email=${email}`;
  const message = `<p> Please confirm your Email by clicking on the following link : <a href ="${verfiyEmail}"> Verify Your Email </a> </p>`;
  return sendEmail({
    to: email,
    subject: 'Email Confirmation',
    html: `<h4> Hello, ${name} </h4>
    ${message}`,
  });
};
module.exports = sendVerficationEmail;
