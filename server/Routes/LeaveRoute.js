const express = require('express')
const LeaveController = require('../Controllers/LeaveController')

const router = express.Router()

router.get('/hodData', LeaveController.HodData);
router.post('/AddLeave/:id', LeaveController.AddLeave);
router.get('/LeavesForHOD/:id', LeaveController.hodEmailLeaves);
router.post('/AcceptLeave/:id', LeaveController.acceptLeave);

module.exports = router;