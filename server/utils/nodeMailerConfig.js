module.exports = {
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: process.env.etherealMail,
    pass: process.env.etherealPassword,
  },
};
