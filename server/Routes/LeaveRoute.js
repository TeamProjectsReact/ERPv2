const express = require('express')
const LeaveController = require('../Controllers/LeaveController')

const router = express.Router()

router.get('/hodData', LeaveController.HodData);
router.post('/AddLeave/:id', LeaveController.AddLeave);
router.get('/LeavesForHOD/:id', LeaveController.hodEmailLeaves);
router.post('/AcceptLeave/:id', LeaveController.acceptLeave);
router.post('/LeaveRollback/:id', LeaveController.LeaveRollback);
router.post('/LeaveRejected/:id', LeaveController.RejectLeave);

module.exports = router;