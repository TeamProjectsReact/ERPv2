import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import  secureLocalStorage  from  "react-secure-storage"
import CountUp from 'react-countup'
import axios from 'axios'

const AddDept = () => {
    const navigate = useNavigate()
    //curent login user
    const EmailUser = secureLocalStorage.getItem("Login1");
    const RoleUser = secureLocalStorage.getItem("Login2");

      // get all hods in database
    const [hodD, SetHodData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/leave/hodData')
        .then(res => SetHodData(res.data.Result))
        .catch(err => console.log(err)) 
    }, [])

    
    if(RoleUser === "SuperAdmin" || RoleUser === "Director" || RoleUser === "Secretary" ){
        return (
            <div className='mx-4'>
                <h1 className="text-gray-500 text-xl font-semibold mb-4">New Department</h1>
                <div className="bg-white py-4 px-8 rounded shadow-md">
                    <div className="my-2">
                        <form>
                            <div className="md:grid grid-cols-3 gap-4">
                                <div className="">
                                    <label htmlFor="" className="">Department ID</label>
                                    <input type="text" name="" id="" className="text-gray-700 h-12 w-full my-2 rounded bg-gray-200 shadow-md pl-2" required placeholder='Enter Department ID'
                                    />
                                </div>
                                <div className="">
                                    <label htmlFor="" className="">Department Name</label>
                                    <input type="text" name="" id="" className="text-gray-700 h-12 w-full my-2 rounded bg-gray-200 shadow-md pl-2" required placeholder='Enter Department Name'
                                    />
                                </div>
                                <div className="">
                                    <label htmlFor="" className="">Department Location</label>
                                    <input type="text" name="" id="" className="text-gray-700 h-12 w-full my-2 rounded bg-gray-200 shadow-md pl-2" required placeholder='Enter Department Location'
                                    />
                                </div>
                                <div className="my-4">
                                    <label htmlFor="" className="text-gray-500">HOD Email</label>
                                    <select name="" id="" className='text-gray-700 h-12 w-full my-2 rounded bg-gray-200 shadow-md pl-2'
                                    >
                                        <option value="">Select One</option>
                                        {
                                            hodD.map((hod) => {
                                                return (
                                                <option value={hod.email}>{hod.email} - {hod.username}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="my-4">
                                <button type="submit" className="bg-gradient-to-r from-green-500 via-white-500 to-blue-500 text-white py-4 px-8 rounded font-semibold">Add Department</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
          )
    }
    else{
        useEffect(() => {
            localStorage.clear()
            navigate('/')
        }, [])
    }
}

export default AddDept