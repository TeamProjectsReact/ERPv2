import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import  secureLocalStorage  from  "react-secure-storage"
import { BsBackpack2Fill, BsSpeedometer2, BsPersonVideo3, BsFileEarmarkText, BsPeople, BsPersonGear, BsPower, BsMortarboard, BsBuilding, BsMortarboardFill, BsPersonCheck, BsCashCoin, BsCalendarEvent } from "react-icons/bs";
import CountUp from 'react-countup'

const DashHome = () => {

    const navigate = useNavigate()
    //curent login user
    const EmailUser = secureLocalStorage.getItem("Login1");
    const RoleUser = secureLocalStorage.getItem("Login2");

    // dashdata
    const DashData = [
      {id: 1, name: "Students", icon: <BsBackpack2Fill />, value: <CountUp end={20} />, style: "text-green-500"},
      {id: 2, name: "Lecturers", icon: <BsPersonVideo3 />, value: <CountUp end={20} />, style: "text-blue-500"},
      {id: 3, name: "Subjects", icon: <BsFileEarmarkText />, value: <CountUp end={20} />, style: "text-yellow-500"},
      {id: 4, name: "Staff", icon: <BsPeople />, value: <CountUp end={20} />, style: "text-red-500"},
      {id: 5, name: "Courses", icon: <BsMortarboard />, value: <CountUp end={20} />, style: "text-purple-500"},
      {id: 6, name: "Departments", icon: <BsBuilding />, value: <CountUp end={20} />, style: "text-yellow-500"},
      {id: 7, name: "Events", icon: <BsCalendarEvent />, value: <CountUp end={20} />, style: "text-yellow-500"},        
    ]


    if(EmailUser !== null & RoleUser !== null){
      return (
          <div className="">
            <h1 className="text-2xl text-gray-500 font-semibold">Dashboard</h1>
            <hr />

            <div className="my-4">
              <div className="">
                <div className="md:grid grid-cols-4 gap-4 mr-4">
                  {
                    DashData.map((data) => {
                      return(
                        <div className={`bg-white w-full mx-2 md:my-0 my-2 duration-500 rounded shadow-md ${data.style}`}>
                          <div className="flex py-6 px-8 w-full justify-between border border-gray-200 rounded">
                              <div className="">
                                  <h1 className={`text-[180%] ${data.style}`}>{data.value}</h1>
                                  <p className="py-2 text-[120%]">{data.name}</p>
                              </div>
                              <div className="">
                                  <p className="text-[200%] text-gray-500">{data.icon}</p>
                              </div>
                          </div>
                          <div className="text-white py-4 px-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded">
                              All {data.name} 
                          </div>
                        </div>
                      )
                    })
                  }                
                </div>
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

export default DashHome