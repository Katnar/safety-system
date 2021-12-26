const express = require('express');
const router = express.Router()

const { create, find, update, remove, findById,jobsbymahzorid,jobsbymahzoridandunitid,jobbyid} = require('../../controllers/general/job');

// find spec 
router.get('/job/:id', findById)
//find all
router.get('/job', find)
//add 
router.post('/job',create); /**/ 
//update 
router.put('/job/:jobId', update)
//delete 
router.delete('/job/:id', remove )

router.get('/jobbyid/:jobid',jobbyid); 

router.get('/jobsbymahzorid/:mahzorid',jobsbymahzorid); 

router.get('/jobsbymahzoridandunitid/:mahzorid/:unitid',jobsbymahzoridandunitid); 

module.exports = router;