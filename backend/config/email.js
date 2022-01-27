const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');

// const transporter = nodemailer.createTransport({
    var smtpConfig = {
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // use SSL
        auth: {
            user: "guythegay12321@gmail.com",
            pass: "malshin123",
        }
    };
    var transporter = nodemailer.createTransport(smtpConfig);

    //   service: 'Gmail', 
    //     xoauth2: xoauth2.createXOAuth2Generator({
    //         user: "guythegay12321@gmail.com",
    //         pass: "malshin123"
    //     })
    // });

module.exports = transporter;
