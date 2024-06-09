const express = require('express')
const LeaveController = require('../Controllers/LeaveController')

const router = express.Router()

router.get('/hodData', LeaveController.HodData);


module.exports = router;