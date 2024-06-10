const User = require('../Models/User')

const DeptController = {
    SeeUsers: async (req, res) => {
        const getUsers = await User.find()

        if(getUsers) {
            return res.json({ Result: getUsers })
        }
        else{
            return res.json({ Error: "Internal Server Error"})
        }
    }
}

module.exports = DeptController