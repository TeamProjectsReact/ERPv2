const mongoose = require('mongoose')

const DepartmentSchema = new mongoose.Schema({
    deptID: {
        type: String,
        required: true,
    },
    deptName: {
        type: String,
        required: true,
    },
    deptLocation: {
        type: String,
        required: true,
    },
    deptHod: {
        type: String,
        required: true,
    }
})

const Department = mongoose.model('Department', DepartmentSchema)

module.exports = Department;