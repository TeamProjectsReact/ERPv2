import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import  secureLocalStorage  from  "react-secure-storage"
import CountUp from 'react-countup'
import axios from 'axios'

// when superadmin director or secetry add employee to department 

const AdminDeptadd = () => {
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