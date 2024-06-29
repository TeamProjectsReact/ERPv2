import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import  secureLocalStorage  from  "react-secure-storage"
import CountUp from 'react-countup'
import axios from 'axios'


// when superadmin director or secetry add employee to department 

const AdminDeptadd = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    //curent login user
    const EmailUser = secureLocalStorage.getItem("Login1");
    const RoleUser = secureLocalStorage.getItem("Login2");

    if(RoleUser === "SuperAdmin" || RoleUser === "Director" || RoleUser === "Secretary" ){
        return (
            <div className='mx-4'>
                <div className="">
                    <Link to={'../Employee'}>
                        <button className='bg-gradient-to-r from-green-500 via-white-500 to-blue-500 text-white py-2 my-4 px-8 rounded font-semibold'>Back</button>  
                    </Link>

                    <div className="bg-white py-4 px-6 rounded shadow-md">
                        <form>
                            <div className="md:grid grid-cols-2 gap-4">
                                <div className="my-2">
                                    <label htmlFor="" className="">Email : </label>
                                    <input type="email" name="" id="" className="text-gray-700 h-12 w-full my-2 rounded bg-gray-200 shadow-md pl-2" disabled value={id}/>
                                </div>
                                <div className="my-2">
                                    <label htmlFor="" className="">Department : </label>
                                    <input type="email" name="" id="" className="text-gray-700 h-12 w-full my-2 rounded bg-gray-200 shadow-md pl-2" required/>
                                </div>
                            </div>
                            <div className="">
                                <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded duration-500 hover:bg-green-500">Add Employee to Dept</button>
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

export default AdminDeptadd