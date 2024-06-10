const mongoose = require('mongoose')

const LeaveSchema = new mongoose.Schema({
    StartTime: {
        type: String,
        required: true,
    },
    reqEmail: {
        type: String,
        required: true,
    },
    hodEmail: {
        type: String,
        required: true,
    },
    StartData: {
        type: Date,
        required: true,
    },
    EndDate: {
        type: Date,
        required: true,
    },
    Dutarion: {
        type: String,
        required: true,
    },
    Status: {
        type: String,
        required: true,
    }
})

const Leave = mongoose.model('Leave', LeaveSchema)

module.exports = Leave;