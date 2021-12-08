const express = require('express');
const router = express.Router()

const { create, find, update, remove, findById} = require('../../controllers/general/affiliation');

// find spec 
router.get('/affiliation/:id', findById)
//find all
router.get('/affiliation', find)
//add 
router.post('/affiliation',create); /**/ 
//update 
router.put('/affiliation/:affiliationId', update)
//delete 
router.delete('/affiliation/:id', remove )

module.exports = router;