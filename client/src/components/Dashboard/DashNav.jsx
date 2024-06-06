import React, { useEffect, useState } from 'react'
import { BsPersonFill, BsCaretDownFill, BsCaretUpFill, BsPower } from 'react-icons/bs'
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

    const headleLogOut = () => {
        localStorage.clear()
        navigate('/')
        window.location.reload()
    }
    
    if(RoleUser !== null && EmailUser !== null){
        return (
            <div className="">
                <div className='bg-white py-8 px-8 rounded-xl shadow-xl mb-8'>
                    <div className="flex justify-between">
                        <div className="">
                            <p className="font-semibold text-xl text-gray-500">Dashboard</p>
                        </div>

                        <div className="flex text-gray-500 cursor-pointer" onClick={toggleUser}>
                            <p className=""><BsPersonFill className='text-2xl'/></p>
                            <p className="md:block hidden pl-2 text-xl">{EmailUser}</p>
                            <p className="pt-1 pl-2 ">
                                {
                                    !DropDown ? <BsCaretDownFill className='text-2xl'/> : <BsCaretUpFill className='text-2xl'/>
                                }
                            </p>
                        </div>
                    </div>
                </div>
                <div className={`${!DropDown ? 'hidden' : 'invisble'} absolute md:right-16 right-8 bg-gray-700 py-4 px-8 mt-[-20px] overflow-auto transform translate-x-0 transition-transform duration-500 rounded shadow-md ease-in-out`}>
                    <p className="md:hidden block py-1 my-3 border-b border-gray-200 text-white">{EmailUser}</p>
                    <div onClick={headleLogOut} className="flex text-red-500 font-semibold cursor-pointer duration-500 hoveer:text-red-600">
                        <p className=""><BsPower className='text-2xl'/></p>
                        <p className="pl-2">Logout</p>
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