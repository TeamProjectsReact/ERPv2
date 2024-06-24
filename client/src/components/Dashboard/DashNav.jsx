import React, { useEffect, useState } from 'react'
import { BsChevronDown, BsChevronUp, BsPersonCircle, BsPersonGear, BsPower } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import  secureLocalStorage  from  "react-secure-storage"

const DashNav = () => {
    const navigate = useNavigate()
    //curent login user
    const EmailUser = secureLocalStorage.getItem("Login1");
    const RoleUser = secureLocalStorage.getItem("Login2");

    const [UserDropDown, SetUserDropDown] = useState(false)
    const toggleDropDown = () => {
      SetUserDropDown(!UserDropDown)
    }

    const headleLogOut = () => {
        localStorage.clear()
        navigate('/')
        window.location.reload()
    }
    
    if(RoleUser !== null && EmailUser !== null){
        return (
            <div className='bg-gray-800 text-white py-5'>
                <div className="flex justify-between">
                    <div className="px-4">
                    ABC Campus
                    </div>
                    <div className="md:block hidden">
                    <div className="flex cursor-pointer px-4" onClick={toggleDropDown}>
                        <BsPersonCircle className='text-2xl'/> 
                        <p className="pl-2">JehanKandy</p>
                        <p className="">
                        {
                            !UserDropDown ? <BsChevronDown className='pl-2 text-xl font-bold'/> : <BsChevronUp className='pl-2 text-xl font-bold'/>
                        }
                        </p>
                    </div>
                    </div>
                </div>
                <div className="flex justify-end">
                    <div className={`${!UserDropDown ? 'hidden' : 'visibale'} py-4 bg-gray-800/95 mt-5 overflow-auto absolute px-4 border-b border-red-500 rounded-b`}>
                        <p className="py-2 px-4 flex"><BsPersonGear className='text-xl'/> <p className="pl-2">My Profile</p></p>
                        <p className="py-2 px-4 flex text-red-500"><BsPower className='text-xl'/> <p className="pl-2">LogOut</p></p>
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