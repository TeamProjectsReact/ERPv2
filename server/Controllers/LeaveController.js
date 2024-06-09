const User = require('../Models/User')

const LeaveController = {
    HodData: async (req, res) => {
        try{
            const hodData = await User.find({ Role: "hod" })

            if(hodData){
                return res.json({ Result: hodData })
            }
        }
        catch (err) {
            console.log(err)
        }
    }
}

module.exports = LeaveController;