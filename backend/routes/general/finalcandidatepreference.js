const express = require('express');
const router = express.Router()

const { create, find, update, remove, findById} = require('../../controllers/general/finalcandidatepreference');

// find spec 
router.get('/finalcandidatepreference/:id', findById)
//find all
router.get('/finalcandidatepreference', find)
//add 
router.post('/finalcandidatepreference',create); /**/ 
//update 
router.put('/finalcandidatepreference/:finalcandidatepreferenceId', update)
//delete 
router.delete('/finalcandidatepreference/:id', remove )

module.exports = router;