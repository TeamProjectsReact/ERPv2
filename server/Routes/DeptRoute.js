const express = require('express')
const DeptController = require('../Controllers/DeptController')

const router = express.Router()

router.get('/UsertoDept', DeptController.SeeUsers)


module.exports = router;
