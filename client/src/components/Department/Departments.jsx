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
                        <Link to={'AddDept'}>
                            <button className='bg-green-600 text-white py-2 px-4 rounded duration-500 hover:bg-green-700'>Add Department</button>
                        </Link>
                    </div>

                    <div className="my-4">
                    <div class="py-2 px-4 rounded shadow-md overflow-x-auto my-8 bg-white">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <th scope="col" class=" table-cell">
                                    <p className="md:block hidden">Department ID</p>
                                    <p className="md:hidden block">Leave Data</p>                                                                        
                                </th>
                                <td scope="col" class=" hidden md:table-cell">
                                    Department Name
                                </td>
                                <td scope="col" class=" hidden md:table-cell">
                                    Department Location
                                </td>
                                <td scope="col" class=" hidden md:table-cell">
                                    End Date
                                </td>
                                <td scope="col" class=" hidden md:table-cell">
                                    Duration
                                </td>
                                <td scope="col" class=" hidden md:table-cell">
                                    Status
                                </td>
                                <td scope="col" class="table-cell">
                                    Action
                                </td>
                            </thead>
                            <tbody>

                            </tbody>
                        </table>
                    </div>
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