const mongoose = require('mongoose')

const EmailSchema = new mongoose.Schema({
    to: {
        type: String,
        required: true
    },
    subject: { 
        type: String, 
        required: true 
    },
    body: { 
        type: String, 
        required: true 
    },
    sendAt: {
        type: Date,
        default: Date.now
    }
})

const Email = mongoose.model("Email", EmailSchema)

module.exports = Email