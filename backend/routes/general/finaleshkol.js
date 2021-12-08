const express = require('express');
const router = express.Router()

const { create, find, update, remove, findById} = require('../../controllers/general/finaleshkol');

// find spec 
router.get('/finaleshkol/:id', findById)
//find all
router.get('/finaleshkol', find)
//add 
router.post('/finaleshkol',create); /**/ 
//update 
router.put('/finaleshkol/:finaleshkolId', update)
//delete 
router.delete('/finaleshkol/:id', remove )

module.exports = router;