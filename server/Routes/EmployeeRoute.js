const express = require('express')
const EmployeeController = require('../Controllers/EmployeeController')

const router = express.Router()

router.get('/CountEmployee', EmployeeController.CountEmployee)

module.exports = router