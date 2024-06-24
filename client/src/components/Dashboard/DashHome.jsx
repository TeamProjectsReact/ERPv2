import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import  secureLocalStorage  from  "react-secure-storage"
import { BsBackpack2Fill, BsSpeedometer2, BsPersonVideo3, BsFileEarmarkText, BsPeople, BsPersonGear, BsPower, BsMortarboard, BsBuilding, BsMortarboardFill, BsPersonCheck, BsCashCoin, BsCalendarEvent, BsCashStack, BsCarFrontFill, BsPassFill, BsHouseGearFill, BsFileTextFill, BsTicketDetailedFill, BsBoxArrowDownRight, BsPeopleFill, BsBuildingFill } from "react-icons/bs";
import CountUp from 'react-countup'
import axios from 'axios';

const DashHome = () => {

    const navigate = useNavigate()
    //curent login user
    const EmailUser = secureLocalStorage.getItem("Login1");
    const RoleUser = secureLocalStorage.getItem("Login2");

    // dashdata
    const DashData = [
      {id: 1, name: "Employees", bgstyle: 'bg-green-400/20', borderStyle: 'border-green-500', icon: <BsPeopleFill />, value: <CountUp end={20} />, style: "text-green-500"},
      {id: 2, name: "Leaves", icon: <BsBoxArrowDownRight />, value: <CountUp end={20} />, style: "text-blue-500"},
      {id: 3, name: "Reservation", icon: <BsTicketDetailedFill />, value: <CountUp end={20} />, style: "text-yellow-500"},
      {id: 4, name: "SRNs", icon: <BsFileTextFill />, value: <CountUp end={20} />, style: "text-red-500"},
      {id: 5, name: "Work Requests", icon: <BsHouseGearFill />, value: <CountUp end={20} />, style: "text-purple-500"},
      {id: 6, name: "GatePass", icon: <BsPassFill />, value: <CountUp end={20} />, style: "text-blue-500"},
      {id: 7, name: "Increment", icon: <BsCashStack />, value: <CountUp end={20} />, style: "text-green-500"},  
      {id: 8, name: "Vehicle", icon: <BsCarFrontFill />, value: <CountUp end={20} />, style: "text-yellow-500"},   
      {id: 9, name: "Departments", icon: <BsBuildingFill />, value: <CountUp end={20} />, style: "text-yellow-500"},                         
    ]

    const [UserData, SetUserData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/Dept/MyDept/' + EmailUser)
        .then(res => SetUserData(res.data.Result))
        .catch(err => console.log(err)) 
    }, [])


    if(EmailUser !== null & RoleUser !== null){
      return (
          <div className="">
            <h1 className="text-2xl text-gray-500 font-semibold">Dashboard</h1>
            <hr />

            <div className="my-4">
              <div className="">
              <div className="my-8 ml-4 mr-6">
                {
                  (() => {
                    if(RoleUser === "HOD"){
                      return (
                        <div className={`bg-white w-full mx-2 md:my-0 my-2 duration-500 rounded shadow-md`}>
                        <div className="flex py-6 px-8 w-full justify-between border border-gray-200 rounded">
                            <div className="">
                                <h1 className={`text-[180%] text-blue-500 font-semilbold`}>#</h1>
                                <p className="py-2 text-[120%]">{UserData}</p>
                            </div>
                            <div className="">
                                <p className="text-[200%] text-gray-500"><BsBuildingFill /></p>
                            </div>
                        </div>
                        <div className="text-white py-4 px-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded">
                            My Department
                        </div>
                      </div>
                      )
                    }
                  })()
                }
                </div>
                <div className="md:grid grid-cols-4 gap-4 mr-4">
                        {
                          DashData.map((data) => {
                            if(RoleUser === "SuperAdmin" || RoleUser === "Director" || RoleUser === "Secretary"){
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
                            }
                            if(RoleUser === "HOD"){
                              if(data.id !== 9){
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
                              }
                            }
                            else{
                              if(data.id !== 1 && data.id !== 9){
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
                              }
                            }
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