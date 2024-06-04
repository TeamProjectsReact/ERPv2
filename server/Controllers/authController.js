const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../Models/User')

const authController = {
    SignUp: async (req, res) => {
        const {username, email, password} = req.body;

        // check user is in database
        const CheckUser = await User.findOne({ email, username })

        if(CheckUser) {
            return res.json({ Error: "User Already in database"})
        }
        else{
            const HashPass = await bcrypt.hash(password, 10);

            const NewUser = new User({
                username: username,
                email: email,
                password: HashPass,
                Role: "User"
            })
        }
    }
}

module.exports = authController