import React, { useEffect, useState } from 'react'
import { BsPersonFill, BsCaretDownFill, BsCaretUpFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import  secureLocalStorage  from  "react-secure-storage"


const DashNav = () => {
    const navigate = useNavigate()
    //curent login user
    const EmailUser = secureLocalStorage.getItem("Login1");
    const RoleUser = secureLocalStorage.getItem("Login2");

    const [DropDown, SetDropDown] = useState(false)

    const toggleUser = () => {
        SetDropDown(!DropDown)
    }
    
    if(RoleUser !== null && EmailUser !== null){
        return (
            <div className='bg-white py-8 px-8 rounded-xl shadow-xl mb-8'>
                <div className="flex justify-between">
                    Dashboard

                    <div className="flex text-gray-500">
                        <p className=""><BsPersonFill className='text-2xl'/></p>
                        <p className="md:block hidden pl-2 text-xl">{EmailUser}</p>
                        <p className="pt-1 pl-2 cursor-pointer" onClick={toggleUser}>
                            {
                                !DropDown ? <BsCaretDownFill className='text-2xl'/> : <BsCaretUpFill className='text-2xl'/>
                            }
                        </p>
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