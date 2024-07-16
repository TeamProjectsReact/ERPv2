const User = require('../Models/User')

const EmployeeController = {
    CountEmployee: async (req, res) =>{
        try{
            const countEmp = await User.countDocuments()

            if(countEmp){
                return res.json({ Result: countEmp })
            }
            else{
                return res.json({ Error: "Internal Server Error"})
            }
        }
        catch (err) {
            console.log(err)
        }
    }
}

module.exports = EmployeeController