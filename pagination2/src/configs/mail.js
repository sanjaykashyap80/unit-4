const nodemailer = require('nodemailer');
require("dotenv").config();

console.log("NODE_ENV",process.env.NODE_ENV)

module.exports = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
      user:
       process.env.NODE_ENV == "development"
       ?SMTP_USERNAME
       :process.env.SMTP_PROD_USERNAME,
      pass:
       process.env.NODE_ENV == "development"
       ? process.env.SMTP_DEVELOPMENT_PASSWORD 
       :process.env.SMTP_PROD_PASSWORD,
    },
  });