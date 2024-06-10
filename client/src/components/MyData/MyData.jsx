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
            console.log(foundEmployee)
            // SetUserData(foundEmployee);
          } catch (error) {
            console.log(err)
          } 
        };
    
        fetchData();
      }, []);

    if(EmailUser !== null && RoleUser !== null){
        return (
            <div className='mx-8 my-4'>
                <h1 className="text-gray-500 font-semibold text-xl">My Profile</h1>

                <div className="bg-white py-4 px-8 my-4 mx-2 rounded shadow-md">

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