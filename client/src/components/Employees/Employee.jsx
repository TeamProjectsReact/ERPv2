import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import  secureLocalStorage  from  "react-secure-storage"
import CountUp from 'react-countup'
import axios from 'axios'

const Employee = () => {
    const navigate = useNavigate()
    //curent login user
    const EmailUser = secureLocalStorage.getItem("Login1");
    const RoleUser = secureLocalStorage.getItem("Login2");

    // get all Employees
    const [UserData, SetUserData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/Dept/UsertoDept')
        .then(res => SetUserData(res.data.Result))
        .catch(err => console.log(err))
    }, [])

    if(RoleUser === "SuperAdmin" || RoleUser === "Director" || RoleUser === "Secretary" || RoleUser === "HOD"){
        return (
            <div className='mx-4'>
                    <div class="py-2 px-4 rounded shadow-md overflow-x-auto my-8 bg-white">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <th scope="col" class=" table-cell">
                                    <p className="md:block hidden">Employee Email</p>
                                    <p className="md:hidden block">Employee Data</p>                                                                        
                                </th>
                                <td scope="col" class=" hidden md:table-cell">
                                    Username
                                </td>
                                <td scope="col" class=" hidden md:table-cell">
                                    Designation
                                </td>
                                <td scope="col" class="table-cell">
                                    Action
                                </td>
                            </thead>
                            <tbody>
                                {
                                    UserData.map((deptUser, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>
                                                    {deptUser.email}
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
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

export default Employee