const express = require('express');
const router = express.Router()

const { create, find, update, remove, findById} = require('../../controllers/general/eshkol');

// find spec 
router.get('/eshkol/:id', findById)
//find all
router.get('/eshkol', find)
//add 
router.post('/eshkol',create); /**/ 
//update 
router.put('/eshkol/:eshkolId', update)
//delete 
router.delete('/eshkol/:id', remove )

module.exports = router;