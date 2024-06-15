const User = require('../Models/User')
const Leave = require('../Models/Leave')
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
});

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

            // return res.json({ Status: "Success"})

        }
        else{
            return res.json({ Error: "Internal Server Error"})
        }
    },

    // get all leaves according to current login hod 
    hodEmailLeaves: async (req, res) => {
        const email = req.params.id
        // console.log(email)
        const hodLeaves = await Leave.find({ hodEmail: email })

        if(hodLeaves){
            return res.json({ Result: hodLeaves})
        }
        else{
            return res.json({ Error: "Internal Server Error"})
        }
    }
}

module.exports = LeaveController;