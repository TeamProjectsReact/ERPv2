import React, { useEffect, useState } from 'react'
import { BsBoxArrowDownRight } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import  secureLocalStorage  from  "react-secure-storage";
import CountUp from 'react-countup';


const SiteAdmins = () => {
    
    const navigate = useNavigate()
    const EmailUser = secureLocalStorage.getItem("Login1");
    const RoleUser = secureLocalStorage.getItem("Login2");

    if(EmailUser !== null && RoleUser !== null && RoleUser === "SuperAdmin"){
        return (
            <div>SiteAdmins</div>
        )
    }
    else{
        useEffect(() => {
            localStorage.clear()
            navigate('/')
        }, [])
    }
}

export default SiteAdmins