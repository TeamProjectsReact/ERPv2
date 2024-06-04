const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../Models/User')

const authController = {
    SignUp: async (req, res) => {
        try{
            console.log(req.body)
            const {username, email, password} = req.body.SignUpData
            const designation = req.body.foundUser.designation;
            
            // check user is in database
            const CheckUser = await User.findOne({ email, username })
    
            if(CheckUser) {
                return res.json({ Error: "User Already in database"})
            }
            const hashPass = await bcrypt.hash(password, 10);

            console.log(hashPass)
        }
        catch (err) {
            console.log(err)
        }
    }

}

module.exports = authController