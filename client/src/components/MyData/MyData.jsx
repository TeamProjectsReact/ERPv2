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

                <div className="bg-white py-4 md:px-8 px-4 my-4 mx-2 rounded shadow-md">
                    <table border={0}>
                        <tr>
                            <td>
                                <p className="text-gray-500">Employee ID</p>
                            </td>
                            <td>
                                {UserData.EmpID}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className="text-gray-500">Initial</p>
                            </td>
                            <td>
                                {UserData.initial} {UserData.surname}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className="text-gray-500">Address</p>
                            </td>
                            <td>
                                {UserData.address} 
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className="text-gray-500">Phone</p>
                            </td>
                            <td>
                                {UserData.phone} 
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className="text-gray-500">Email</p>
                            </td>
                            <td>
                                {UserData.email} 
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className="text-gray-500">Designation</p>
                            </td>
                            <td>
                                {UserData.designation} 
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className="text-gray-500">NIC</p>
                            </td>
                            <td>
                                {UserData.nic} 
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className="text-gray-500">Contact</p>
                            </td>
                            <td>
                                {UserData.emgcontact}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className="text-gray-500">Employee type</p>
                            </td>
                            <td>
                                {UserData.type}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className="text-gray-500">Civil Status</p>
                            </td>
                            <td>
                                {UserData.civilstatus}
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