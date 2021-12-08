const express = require('express');
const router = express.Router()

const { create, find, update, remove, findById} = require('../../controllers/general/candidatepreference');

// find spec 
router.get('/candidatepreference/:id', findById)
//find all
router.get('/candidatepreference', find)
//add 
router.post('/candidatepreference',create); /**/ 
//update 
router.put('/candidatepreference/:candidatepreferenceId', update)
//delete 
router.delete('/candidatepreference/:id', remove )

module.exports = router;