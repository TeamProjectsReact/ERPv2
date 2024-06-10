import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import  secureLocalStorage  from  "react-secure-storage"
import CountUp from 'react-countup'
import axios from 'axios'

const MyData = () => {
    const navigate = useNavigate()
    //curent login user
    const EmailUser = secureLocalStorage.getItem("Login1");
    const RoleUser = secureLocalStorage.getItem("Login2");

    const [UserData, SetUserData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://teamprojectsreact.github.io/EMPAPI/EmpRestAPI.employees.json');
            const foundEmployee = response.data.find(emp => emp.email === EmailUser);
            // console.log(foundEmployee)
            SetUserData(foundEmployee);
          } catch (error) {
            console.log(err)
          } 
        };
    
        fetchData();
      }, []);

    if(EmailUser !== null && RoleUser !== null){
        return (
            <div className='md:mx-8 mx-2 my-4'>
                <h1 className="text-gray-500 font-semibold text-xl">My Profile</h1>

                <div className="bg-white py-4 md:px-8 px-4 my-4 mx-2 rounded shadow-md flex">
                    <table border={0}>
                        <tr className='border-b border-gray-200 h-12 w-full'>
                            <td>
                                <p className="text-gray-500">Employee ID</p>
                            </td>
                            <td className='pl-4'>
                                <p className="text-blue-500 font-semibold">{UserData.EmpID}</p>
                            </td>
                        </tr>
                        <tr className='border-b border-gray-200 h-12'>
                            <td>
                                <p className="text-gray-500">Initial</p>
                            </td>
                            <td className='pl-4'>
                                {UserData.initial} {UserData.surname}
                            </td>
                        </tr>
                        <tr className='border-b border-gray-200 h-12'>
                            <td>
                                <p className="text-gray-500">Address</p>
                            </td>
                            <td className='pl-4'>
                                {UserData.address} 
                            </td>
                        </tr>
                        <tr className='border-b border-gray-200 h-12'>
                            <td>
                                <p className="text-gray-500">Phone</p>
                            </td>
                            <td className='pl-4'>
                                {UserData.phone} 
                            </td>
                        </tr>
                        <tr className='border-b border-gray-200 h-12'>
                            <td>
                                <p className="text-gray-500">Email</p>
                            </td>
                            <td className='pl-4'>
                                {UserData.email} 
                            </td>
                        </tr>
                        <tr className='border-b border-gray-200 h-12'>
                            <td>
                                <p className="text-gray-500">Designation</p>
                            </td>
                            <td className='pl-4'>
                                {UserData.designation} 
                            </td>
                        </tr>
                        <tr className='border-b border-gray-200 h-12'>
                            <td>
                                <p className="text-gray-500">NIC</p>
                            </td>
                            <td className='pl-4'>
                                {UserData.nic} 
                            </td>
                        </tr>
                        <tr className='border-b border-gray-200 h-12'>
                            <td>
                                <p className="text-gray-500">Contact</p>
                            </td>
                            <td className='pl-4'>
                                {UserData.emgcontact}
                            </td>
                        </tr>
                        <tr className='border-b border-gray-200 h-12'>
                            <td>
                                <p className="text-gray-500">Employee type</p>
                            </td>
                            <td className='pl-4'>
                                {UserData.type}
                            </td>
                        </tr>
                        <tr className='border-b border-gray-200 h-12'>
                            <td>
                                <p className="text-gray-500">Civil Status</p>
                            </td>
                            <td className='pl-4'>
                                {UserData.civilstatus}
                            </td>
                        </tr>
                        <tr className='border-b border-gray-200 h-12'>
                            <td>
                                <p className="text-gray-500">Gender</p>
                            </td>
                            <td className='pl-4'>
                                {UserData.gender}
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
    else{
        useEffect(() => {
            localStorage.clear()
            navigate('/')
        })
    }
}

export default MyData