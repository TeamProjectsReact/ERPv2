const express = require('express')
const LeaveController = require('../Controllers/LeaveController')

const router = express.Router()

router.get('/hodData', LeaveController.HodData);
router.post('/AddLeave/:id', LeaveController.AddLeave);
router.get('/AllLeaves', LeaveController.hodEmailLeaves);
router.post('/AcceptLeave/:id', LeaveController.acceptLeave);
router.post('/LeaveRollback/:id', LeaveController.LeaveRollback);
router.post('/LeaveRejected/:id', LeaveController.RejectLeave);
router.delete('/LeaveDelete/:id', LeaveController.DeleteLeave);

module.exports = router;