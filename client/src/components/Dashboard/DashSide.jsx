import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import  secureLocalStorage  from  "react-secure-storage"
import MyIcons from '@reacticons/ionicons'
import SuperAdminImg from '../../assets/SuperAdminWhite.png'

import { BsBackpack2Fill, BsSpeedometer2, BsPersonVideo3, BsFileEarmarkText, BsPeople, BsPersonGear, BsPower, BsBook, BsPatchCheck, BsBuilding, BsFile, BsMortarboard, BsList, BsX, BsCalendarEvent, BsBell, BsFilesAlt, BsFileText, BsCashCoin } from "react-icons/bs";



const DashSide = () => {
    const navigate = useNavigate()
    //curent login user
    const RoleUser = secureLocalStorage.getItem("Login1");
    const EmailUser = secureLocalStorage.getItem("login2");
    const DarkMode = localStorage.getItem('darkMode');

    // alert(DarkMode)

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };

    const SideLink = [
        {id: 1, name: "Dashboard", link: "Home", icons: <BsSpeedometer2 />},
        {id: 2, name: "Students", link: "Students", icons: <BsBackpack2Fill />},
        {id: 3, name: "Lecturers", link: "Teachers", icons: <BsPersonVideo3 />},
        {id: 4, name: "Subjects", link: "Subjects", icons: <BsFileEarmarkText />}, 
        {id: 5, name: "Staff", link: "Staff", icons: <BsPeople />},       
        {id: 6, name: "Library", link: "Library", icons: <BsBook />},   // for labrarian
        {id: 7, name: "Marks", link: "MyMarks", icons: <BsPatchCheck />},  // student
        {id: 8, name: "Departments", link: "Departments", icons: <BsBuilding />},  
        {id: 9, name: "Courses", link: "Courses", icons: <BsMortarboard />},  
        {id: 10, name: "Batches", link: "Batches", icons: <BsPeople />},
        {id: 11, name: "Events", link: "Events", icons: <BsCalendarEvent />}, 
        {id: 12, name: "My Courses", link: "MyCourses", icons: <BsMortarboard />}, 
        {id: 13, name: "Notifications", link: "Notifications", icons: <BsBell />},         
        {id: 14, name: "Profile", link: "MyProfile", icons: <BsPersonGear />},
        {id: 15, name: "Semesters", link: "Semesters", icons: <BsFilesAlt />},
        {id: 16, name: "Exams", link: "Exams", icons: <BsFileText />},
        {id: 17, name: "My Payments", link: "Expenses", icons: <BsCashCoin />},
        
        
          

        {name: "LogOut", icons: <BsPower />},       
    ]

    const headleLogOut = () => {
        localStorage.clear()
        navigate('/')
        window.location.reload()
    }
    
    const [ModeDark, SetModeDark] = useState(false)

    // for darkmode
    const healeDarkMode = () => {
        SetModeDark(true)
    }

    const healeLightkMode = () => {
        SetModeDark(false)
    }

        
    localStorage.setItem("darkMode", ModeDark) 
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
                    <p className="text-2xl my-4 "><MyIcons name='school' size='large'></MyIcons></p>                    

                            <div className="my-4">
                                <h1 className="lg:text-2xl text-xl my-2 pl-2">ABC Campus</h1>
                                {
                                    (() => {
                                        if(RoleUser === "SuperAdmin"){
                                            return (
                                                <p className='text-sm'>SuperAdmin</p>
                                            )
                                        }
                                        if(RoleUser === "Student"){
                                            return (
                                                <p className='text-sm'>Student</p>
                                            )
                                        }
                                        if(RoleUser === "Hod"){
                                            return (
                                                <p className='text-sm'>Hend of Dept</p>
                                            )
                                        }
                                        if(RoleUser === "Lec"){
                                            return (
                                                <p className='text-sm'>Lecturer</p>
                                            )
                                        }
                                    })()
                                }
                                
                            </div>


                    
                </div>
                <hr className={` ${DarkMode ? 'border-gray-400' : 'border-white'}`}/>
                
                <div className="my-8">
                    {
                        SideLink.map((AdminLinks) => {
                            if(AdminLinks.name === "LogOut"){
                                return (
                                    <div onClick={() => headleLogOut()} className="my-8 mx-2 text-red-500 cursor-pointer">
                                        <div className="flex">
                                            <p className="lg:text-3xl lg:my-2 text-xl">{AdminLinks.icons}</p>
                                            <p className={`lg:text-xl lg:pt-2 pl-4 `}>{AdminLinks.name}</p>
                                        </div>
                                    </div>
                                )
                            }
                            else{
                                if(RoleUser === "SuperAdmin"){
                                    if(AdminLinks.id !== 12 && AdminLinks.id !== 17){
                                        return (
                                            <Link to={AdminLinks.link}>
                                                <div className="my-4 mx-2">
                                                    <div className="flex">
                                                        <p className="lg:text-3xl lg:my-2 text-xl">{AdminLinks.icons}</p>
                                                        <p className={`lg:text-xl lg:pt-2 pl-4 `}>{AdminLinks.name}</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        )
                                    }
                                }
                                if(RoleUser === "Student"){
                                    if(AdminLinks.id === 1 || AdminLinks.id === 6 || AdminLinks.id === 7 || AdminLinks.id === 11 || AdminLinks.id === 12 || AdminLinks.id === 13 || AdminLinks.id === 14 || AdminLinks.id === 17){
                                        return (
                                            <Link to={AdminLinks.link}>
                                                <div className="my-4 mx-2">
                                                    <div className="flex">
                                                        <p className="lg:text-3xl lg:my-2 text-xl">{AdminLinks.icons}</p>
                                                        <p className={`lg:text-xl lg:pt-2 pl-4 `}>{AdminLinks.name}</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        )
                                    }
                                }
                                if(RoleUser === "Hod"){
                                    if(AdminLinks.id !== 5 && AdminLinks.id !== 8 && AdminLinks.id !== 12 && AdminLinks.id !== 17){
                                        return (
                                            <Link to={AdminLinks.link}>
                                                <div className="my-4 mx-2">
                                                    <div className="flex">
                                                        <p className="lg:text-3xl lg:my-2 text-xl">{AdminLinks.icons}</p>
                                                        <p className={`lg:text-xl lg:pt-2 pl-4 `}>{AdminLinks.name}</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        )
                                    }
                                }
                                if(RoleUser === "Lec"){
                                    if(AdminLinks.id === 1 || AdminLinks.id === 2 || AdminLinks.id === 4 || AdminLinks.id === 6 || AdminLinks.id === 7 || AdminLinks.id === 15 || AdminLinks.id === 14 || AdminLinks.id === 16){
                                        return (
                                            <Link to={AdminLinks.link}>
                                                <div className="my-4 mx-2">
                                                    <div className="flex">
                                                        <p className="lg:text-3xl lg:my-2 text-xl">{AdminLinks.icons}</p>
                                                        <p className={`lg:text-xl lg:pt-2 pl-4 `}>{AdminLinks.name}</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        )
                                    }
                                }
                            }
                        })
                    }
                </div>

            </div>
        </div>
    )
    
}

export default DashSide