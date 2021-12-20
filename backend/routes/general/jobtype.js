const express = require('express');
const router = express.Router()

const { create, find, update, remove, findById} = require('../../controllers/general/jobtype');

// find spec 
router.get('/jobtype/:id', findById)
//find all
router.get('/jobtype', find)
//add 
router.post('/jobtype',create); /**/ 
//update 
router.put('/jobtype/:jobtypeId', update)
//delete 
router.delete('/jobtype/:id', remove )

module.exports = router;