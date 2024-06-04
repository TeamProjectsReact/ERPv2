const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../Models/User')

const authController = {
    SignUp: async (req, res) => {
        console.log(req.body)
        const {username, email, password, Role} = req.body;
        const designation = req.body.foundUser.designation
        console.log(designation)
        
        // // check user is in database
        // const CheckUser = await User.findOne({ email, username })

        // if(CheckUser) {
        //     return res.json({ Error: "User Already in database"})
        // }
        // else{
        //     const HashPass = await bcrypt.hash(password, 10);

        //     const NewUser = new User({
        //         username: username,
        //         email: email,
        //         password: HashPass,
        //         Role: Role
        //     })

        //     const ResultUser = await NewUser.save()

        //     if(ResultUser) {
        //         return res.json({ Status: "Success" })
        //     }
        //     else{
        //         return res.json({ Error: "Internal Server ERROR" })
        //     }
        // }
    }
}

module.exports = authController