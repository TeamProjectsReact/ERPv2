import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import  secureLocalStorage  from  "react-secure-storage"
import CountUp from 'react-countup'
import axios from 'axios'


const Departments = () => {
    const navigate = useNavigate()
    //curent login user
    const EmailUser = secureLocalStorage.getItem("Login1");
    const RoleUser = secureLocalStorage.getItem("Login2");

    if(RoleUser === "SuperAdmin" || RoleUser === "Director" || RoleUser === "Secretary" ){
        return (
            <div className='mx-4'>
                <div className="">
                    <h1 className="text-gray-500 text-xl font-semibold">Departments</h1>
                    <div className="my-4">
                        <Link>
                            <button className='bg-green-600 text-white py-2 px-4 rounded duration-500 hover:bg-green-700'>Add Department</button>
                        </Link>
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

export default Departments