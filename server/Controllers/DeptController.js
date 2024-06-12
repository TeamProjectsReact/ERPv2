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
        try{
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
                    Status: "Active"
                })

                const resultDept = AddDeprt.save()
                const UpdateData = {
                    Department: req.body.deptName,
                }

                const Hoduser = await User.findOneAndUpdate({ email: req.body.hodEmail }, UpdateData, { new: true });

                if(Hoduser){
                    return res.json({ Status: "Success"})
                }
                else{
                    return res.json({ Error: "Internal Server Error 1"})
                }
            }            
        }
        catch (err) {
            console.log(err)
        }

    },

    // get all departs
    AllDepts: async (req, res) => {
        const depts = await Department.find();

        if(depts){
            return res.json({ Result: depts })
        }
        else{
            return res.json({ Error: "Internal Server Error" })
        }
    },

    MyDept: async (req, res) => {

    }
}

module.exports = DeptController