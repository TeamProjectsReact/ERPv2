const Department = require('../Models/Department')
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
    },

    AddDept: async (req, res) => {
        // console.log(req.body)

        const { deptID, deptName, deptLocation, hodEmail } = req.body

        const checkDept = await Department.findOne({ deptID })

        if(checkDept){
            return res.json({ Error: "Department Alredy in Database"})
        }
        else{
            // add department
            const AddDeprt = new Department({
                deptID: deptID,
                deptName: deptName,
                deptLocation: deptLocation,
                deptHod: hodEmail,
            })

            const resultDept = AddDeprt.save()

            if(resultDept) {
                return res.json({ Status: "Success"})
            }
            else{
                return res.json({ Error: "Internal Server Error"})
            }
        }
    }
}

module.exports = DeptController