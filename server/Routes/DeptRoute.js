const express = require('express')
const DeptController = require('../Controllers/DeptController')

const router = express.Router()

router.get('/UsertoDept', DeptController.SeeUsers)
router.post('/AddDept', DeptController.AddDept)
router.get('/allDepats', DeptController.AllDepts)

module.exports = router;
