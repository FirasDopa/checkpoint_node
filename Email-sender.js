const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mohamedfiras.silini@esprit.tn',
    pass: 'mrhdjkbjnzuxgrvu'
  }
});

const mailOptions = {
  from: 'mohamedfiras.silini@esprit.tn',
  to: 'mohamedfiras.silini@esprit.tn',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
