const User = require('../Models/User')

const LeaveController = {
    HodData: async (req, res) => {
        try{
            const hodData = await User.find({ Role: 'HOD' })
            if(hodData){
                return res.json({ Result: hodData })
                // console.log("HOD", hodData)
            }
            else{
                console.log("no HOD")
            }
        }
        catch (err) {
            console.log(err)
        }
    },

    AddLeave: async (req, res) => {
        console.log(req.body)

        // const {
        //     startTime,
        //     hodEmail,
        //     startDate,
        //     endDate,
        //     Dutarion
        // } = req.body


    }
}

module.exports = LeaveController;