import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import  secureLocalStorage  from  "react-secure-storage"

import { BsBackpack2Fill, BsSpeedometer2, BsPersonVideo3, BsFileEarmarkText, BsPeople, BsPersonGear, BsPower, BsBook, BsPatchCheck, BsBuilding, BsFile, BsMortarboard, BsList, BsX, BsCalendarEvent, BsBell, BsFilesAlt, BsFileText, BsCashCoin, BsMortarboardFill, BsCaretDownFill } from "react-icons/bs";



const DashSide = () => {
    const navigate = useNavigate()
    //curent login user
    const RoleUser = secureLocalStorage.getItem("Login1");
    const EmailUser = secureLocalStorage.getItem("Login2");

    // alert(DarkMode)

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };

    const SideLink = [
        {id: 1, name: "Dashboard", link: "Home", icons: <BsSpeedometer2 />},      
  
    ]


    
        
    return (
        <div className="min-h-screen">
            <button
                className="md:hidden fixed top-4 right-4 z-50 bg-gray-600 text-white p-2 rounded font-semibold"
                onClick={toggleSidebar}
            >
                {
                    !isOpen ? <BsList /> : <BsX />
                }
            </button>
            <div className={`lg:min-h-screen lg:pr-16 md:relative fixed overflow-auto top-0 left-0 h-full px-4 bg-gray-800 text-white w-auto transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out`}>
                <div className="flex whitespace-nowrap lg:py-8">
                    <p className="text-2xl my-4 pt-1"><BsMortarboardFill className='text-4xl'/></p>     
                        <div className="my-4">
                            <h1 className="lg:text-2xl text-xl my-2 pl-4">ERP System</h1>
                            <p className="">SuperAdmin</p>                              
                        </div>                   
                   
                </div>
                <hr className={`border-white`}/>
                
                <div className="my-8">

                </div>

            </div>
        </div>
    )
    
}

export default DashSide