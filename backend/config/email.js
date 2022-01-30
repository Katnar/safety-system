const nodemailer = require("nodemailer");
// const smtpTransport = require('nodemailer-smtp-transport')
// const xoauth2 = require('xoauth2');

const transporter = nodemailer.createTransport({
  host: "vm0099smtp",
  port: 25,
  secure: false, // use SSL
  // auth: {
  //     user: "guythegay12321@gmail.com",
  //     pass: "malshin123",
  // }
  // var transporter = nodemailer.createTransport(smtpConfig);

  //   service: 'Gmail',
  //     xoauth2: xoauth2.createXOAuth2Generator({
  //         user: "guythegay12321@gmail.com",
  //         pass: "malshin123"
  //     })
});

module.exports = transporter;
