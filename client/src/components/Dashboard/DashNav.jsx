import React, { useEffect, useState } from 'react'
import { BsPersonFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import  secureLocalStorage  from  "react-secure-storage"


const DashNav = () => {
    const navigate = useNavigate()
    //curent login user
    const EmailUser = secureLocalStorage.getItem("Login1");
    const RoleUser = secureLocalStorage.getItem("Login2");

    const [DropDown, SetDropDown] = useState(false)
    
    
    if(RoleUser !== null && EmailUser !== null){
        return (
            <div className='bg-white py-8 px-8 rounded-xl shadow-xl mb-8'>
                <div className="flex justify-between">
                    Dashboard

                    <div className="flex text-gray-500">
                        <p className=""><BsPersonFill className='text-2xl'/></p>
                        <p className="pl-2 text-xl">{EmailUser}</p>
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

export default DashNav