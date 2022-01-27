"use strict";
const nodemailer = require("nodemailer");
const transporter = require('../../config/email');

// async..await is not allowed in global scope, must use a wrapper

exports.mail = async (req, res) => {
  let info = await transporter.sendMail({
    from: '"guy the gay" <guythegay12321@gmail.com>', // sender address
    // from: '"Safety System" <safetysystem@army.idf.il>', // sender address
    to: "guythegay12321@gmail.com", // list of receivers
    subject: "התראת  הומו תתחיל להוריד הילוך ומהר ימנייק", // Subject line
    // text: "ההסמכה שלך תפוג בעוד חודשיים, שים לב", // plain text body
    html: "<p>שמע אתה הומו רציני אה</p>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  res.json('banana')
};