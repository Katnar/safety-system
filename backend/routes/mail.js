const express = require('express');
const router = express.Router()

const {mail} = require('../controllers/general/mail');

// find spec 
router.post('/sendMail', mail)


module.exports = router;