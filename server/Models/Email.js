const mongoose = require('mongoose')

const EmailSchema = new mongoose.Schema({

})

const Email = mongoose.model("Email", EmailSchema)

module.exports = Email