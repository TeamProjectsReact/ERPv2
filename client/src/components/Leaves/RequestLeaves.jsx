import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import  secureLocalStorage  from  "react-secure-storage"
import axios from 'axios'

const RequestLeaves = () => {
    const navigate = useNavigate()
    //curent login user
    const EmailUser = secureLocalStorage.getItem("Login1");
    const RoleUser = secureLocalStorage.getItem("Login2");

    const [buttonValue, SetButtonValue] = useState(0)
    const HeadleButtonClick = (clickValue) => {
        SetButtonValue(clickValue)   
    }

    if(RoleUser === "SuperAdmin" || RoleUser === "Director" || RoleUser === "Secretary" || RoleUser === "HOD"){
        return (
            <div className='mx-4 my-8'>
                <h1 className="text-gray-500 text-xl font-semibold">Requested Leaves</h1>
                <div className="my-4">
                    <div class="py-2 px-4 rounded shadow-md overflow-x-auto my-8 bg-white">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <th scope="col" class=" hidden md:table-cell">
                                    Email
                                </th>
                                <td scope="col" class=" hidden md:table-cell">
                                    Start Time
                                </td>
                                <td scope="col" class=" hidden md:table-cell">
                                    Start Date
                                </td>
                                <td scope="col" class=" hidden md:table-cell">
                                    End Date
                                </td>
                                <td scope="col" class=" hidden md:table-cell">
                                    Dutarion
                                </td>
                                <td scope="col" class=" hidden md:table-cell">
                                    Status
                                </td>
                                <td scope="col" class=" hidden md:table-cell">
                                    Action
                                </td>
                            </thead>
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

export default RequestLeaves