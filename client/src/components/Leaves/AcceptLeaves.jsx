import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import  secureLocalStorage  from  "react-secure-storage";
import Leaves from './Leaves';

const AcceptLeaves = () => {
    const navigate = useNavigate()
    //curent login user
    const EmailUser = secureLocalStorage.getItem("Login1");
    const RoleUser = secureLocalStorage.getItem("Login2");

    if(RoleUser === "SuperAdmin" || RoleUser === "Director" || RoleUser === "Secretary"){
        return (
            <div className=''>
                <Leaves />
                <div className="my-4">                    
                    <div className="py-2 px-4 rounded shadow-md overflow-x-auto my-8 bg-white">
                    <h1 className="pb-4">Accept Leaves</h1>
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-green-500/50 text-green-800 h-12 dark:bg-gray-700 dark:text-green-400">
                                <th scope="col" className=" table-cell">
                                    <p className="md:block hidden">Email</p>
                                    <p className="md:hidden block">Leave Data</p>                                                                        
                                </th>
                                <td scope="col" className=" hidden md:table-cell">
                                    Start Time
                                </td>
                                <td scope="col" className=" hidden md:table-cell">
                                    Start Date
                                </td>
                                <td scope="col" className=" hidden md:table-cell">
                                    End Date
                                </td>
                                <td scope="col" className=" hidden md:table-cell">
                                    Duration
                                </td>
                                <td scope="col" className=" hidden md:table-cell">
                                    Status
                                </td>
                                <td scope="col" className="table-cell">
                                    Action
                                </td>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
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

export default AcceptLeaves