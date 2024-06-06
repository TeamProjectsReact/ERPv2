import React, { useEffect, useState } from 'react'
import { BsBoxArrowDownRight } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import  secureLocalStorage  from  "react-secure-storage";
import CountUp from 'react-countup';

const Leaves = () => {
  const LeaveData = [
    {id: 1, btnValue: "allLeaves", name: "Leaves", icon: <BsBoxArrowDownRight />, value: <CountUp end={20} />, style: "text-green-500"},
    {id: 2, btnValue: "RequestLeaves", name: "Requested Leaves", icon: <BsBoxArrowDownRight />, value: <CountUp end={20} />, style: "text-green-500"},
    {id: 3, btnValue: "RecommendLeaves", name: "Recommed Leaves", icon: <BsBoxArrowDownRight />, value: <CountUp end={20} />, style: "text-green-500"},   
    {id: 3, btnValue: "RejectLeaves", name: "Reject Leaves", icon: <BsBoxArrowDownRight />, value: <CountUp end={20} />, style: "text-green-500"},     
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
                <div className="md:grid grid-cols-4 gap-4 mr-4">
                  {
                    LeaveData.map((data) => {
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