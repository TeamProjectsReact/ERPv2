const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../Models/User')

const authController = {
    SignUp: async (req, res) => {
        const {username, email, password} = req.body;

        // check user is in database
        const CheckUser = await User.findOne({  })
    }
}

module.exports = authController