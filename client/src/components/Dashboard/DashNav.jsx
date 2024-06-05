import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import  secureLocalStorage  from  "react-secure-storage"


const DashNav = () => {
    const navigate = useNavigate()
    //curent login user
    const RoleUser = secureLocalStorage.getItem("Login1");
    const EmailUser = secureLocalStorage.getItem("Login2");
    
    
    if(RoleUser !== null && EmailUser !== null){
        return (
            <div className='bg-white py-8 px-8 rounded-xl shadow-xl mb-8'>
                <div className="flex ">
                    Dashboard
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