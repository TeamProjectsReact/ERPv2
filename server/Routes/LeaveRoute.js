const express = require('express')
const LeaveController = require('../Controllers/LeaveController')

const router = express.Router()

router.get('/hodData', LeaveController.HodData);
router.post('/AddLeave/:id', LeaveController.AddLeave);
router.get('/LeavesForHOD/:id', LeaveController.hodEmailLeaves);

module.exports = router;