const User = require('../Models/User')
const Leave = require('../Models/Leave')

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
        // console.log(req.body)
        // console.log(req.params.id)

        const {
            startTime,
            hodEmail,
            startDate,
            endDate,
            Dutarion
        } = req.body

        const Emailid = req.params.id

        const leaveAdd = new Leave({
            StartTime: startTime,
            reqEmail: Emailid,
            hodEmail: hodEmail,
            StartData: startDate,
            EndDate: endDate,
            Dutarion: Dutarion,
            Status: "Requested"
        })

        const ResultLeave = leaveAdd.save()

        if(ResultLeave){
            return res.json({ Status: "Success"})
        }
        else{
            return res.json({ Error: "Internal Server Error"})
        }
    },

    // get all leaves according to current login hod 
    hodEmailLeaves: async (req, res) => {
        const hodLeaves = await Leave.find({ hodEmail })
    }
}

module.exports = LeaveController;