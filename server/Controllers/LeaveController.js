const User = require('../Models/User')

const LeaveController = {
    HodData: async (res, req) => {
        try{
            const hodData = await User.findOne({  })
        }
        catch (err) {
            console.log(err)
        }
    }
}