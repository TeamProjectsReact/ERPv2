import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import  secureLocalStorage  from  "react-secure-storage"


import { BsBackpack2Fill, BsSpeedometer2, BsPersonVideo3, BsFileEarmarkText, BsPeople, BsPersonGear, BsPower, BsBook, BsPatchCheck, BsBuilding, BsFile, BsMortarboard, BsList, BsX, BsCalendarEvent, BsBell, BsFilesAlt, BsFileText, BsCashCoin, BsMortarboardFill, BsCaretDownFill, BsBoxArrowDownRight, BsTicketDetailedFill, BsFileTextFill, BsHouseGearFill, BsPassFill, BsCashStack, BsCarFrontFill } from "react-icons/bs";



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
        {id: 2, name: "Leaves", link: "Leaves", icons: <BsBoxArrowDownRight />},  
        {id: 3, name: "Reservation", link: "Reservation", icons: <BsTicketDetailedFill />},  
        {id: 4, name: "SRNs", link: "SRNs", icons: <BsFileTextFill />},  
        {id: 5, name: "Work Requests", link: "WorkRequests", icons: <BsHouseGearFill />},  
        {id: 7, name: "GatePass", link: "GatePass", icons: <BsPassFill />},  
        {id: 8, name: "Increment", link: "Increment", icons: <BsCashStack />},  
        {id: 9, name: "Vehicle", link: "Vehicle", icons: <BsCarFrontFill />},  
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
                <div className="flex whitespace-nowrap lg:py-4">
                    <p className="text-2xl my-4 pt-1"><BsMortarboardFill className='text-4xl'/></p>     
                        <div className="my-2">
                            <h1 className="lg:text-2xl text-xl my-2 pl-4">ERP System</h1>
                            <p className="">SuperAdmin</p>                              
                        </div>                   
                   
                </div>
                <hr className={`border-white`}/>
                
                <div className="my-4">
                    {
                        SideLink.map((side, indx) => {
                            return (
                                <Link to={side.link}>
                                    <div className="my-4 mx-2">
                                        <div className="flex">
                                            <p className="lg:text-3xl lg:my-2 text-xl">{side.icons}</p>
                                            <p className={`lg:text-xl lg:pt-2 pl-4 `}>{side.name}</p>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
    
}

export default DashSide