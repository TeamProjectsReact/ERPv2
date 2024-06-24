import React, { useEffect, useState } from 'react'
import { BsBoxArrowDownRight } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import  secureLocalStorage  from  "react-secure-storage";
import CountUp from 'react-countup';
import AddLeaves from './AddLeaves';

const Leaves = () => {
  const LeaveData = [
    {id: 1, bgstyle: 'bg-blue-400/20', borderStyle: 'border-blue-500', btnValue: 0, name: "Leaves", icon: <BsBoxArrowDownRight />, value: <CountUp end={20} />, style: "text-blue-500"},
    {id: 2, bgstyle: 'bg-yellow-400/20', borderStyle: 'border-yellow-500', btnValue: "RequestLeaves", name: "Accepted", icon: <BsBoxArrowDownRight />, value: <CountUp end={20} />, style: "text-yellow-500"},
    {id: 3, bgstyle: 'bg-green-400/20', borderStyle: 'border-green-500', btnValue: "RecommendLeaves", name: "Approved", icon: <BsBoxArrowDownRight />, value: <CountUp end={20} />, style: "text-green-500"},   
    {id: 3, bgstyle: 'bg-red-400/20', borderStyle: 'border-red-500', btnValue: "RejectLeaves", name: "Reject", icon: <BsBoxArrowDownRight />, value: <CountUp end={20} />, style: "text-red-500"},     
  ]

  const navigate = useNavigate()
  //curent login user
  const EmailUser = secureLocalStorage.getItem("Login1");
  const RoleUser = secureLocalStorage.getItem("Login2");

  const [buttonValue, SetButtonValue] = useState(0)
  const HeadleButtonClick = (clickValue) => {
      SetButtonValue(clickValue)   
  }

  if(EmailUser !== null && RoleUser !== null){
    return (
      <div className='ml-4'>
        <div className="">
          <h1 className="text-xl font-semiblod text-gray-500">Leaves</h1>
          <div className="my-4">
          <div className="">
            {
                (() => {
                    if(RoleUser === "SuperAdmin" || RoleUser === "Director" || RoleUser === "Secretary"){
                        return (
                            <div className="md:grid grid-cols-4 gap-4 mr-4">
                            {
                              LeaveData.map((data) => {
                                return(
                                  <div className={`md:my-0 my-2 ${data.bgstyle} text-white px-4 py-8 rounded border-l-4 shadow-lg shadow-red ${data.borderStyle}`}>
                                    <div className="flex justify-between">
                                        <div className="">
                                            <h1 className={`text-3xl font-semibold ${data.style}`}>{data.value}</h1>
                                            <p className={`${data.style}`}>{data.name}</p> 
                                        </div>
                                        <div className="">
                                            <p className={`text-4xl ${data.style} pt-2`}>{data.icon}</p>
                                        </div>
                                    </div>
                                  </div>
                                )
                              })
                            }                
                          </div>
                        )
                    }
                    else{
                        return (
                            <AddLeaves />
                        )
                    }
                })()
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

export default Leaves