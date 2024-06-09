import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import  secureLocalStorage  from  "react-secure-storage"
import CountUp from 'react-countup'


const AddLeaves = () => {
  const navigate = useNavigate()
  //curent login user
  const EmailUser = secureLocalStorage.getItem("Login1");
  const RoleUser = secureLocalStorage.getItem("Login2");

  if(RoleUser !== null && EmailUser !== null){
    return (
      <div>
        <div className="bg-white py-4 px-8 rounded shadow-md">
          <h1 className="font-semibold text-gray-500 text-2xl">New Leave</h1>
          <hr />
          <div className="my-4">
            <form>
              <div className="md:grid grid-cols-3 gap-4">
                <div className="my-4">
                  <label htmlFor="" className="">Start Time</label>
                  <input type="time" name="" id="" className="h-12 w-full my-2 rounded bg-gray-200 shadow-md pl-2" required placeholder='Enter Start Time' 
                  />
                </div>
                <div className="my-4">
                  <label htmlFor="" className="">Email</label>
                  <input type="email" name="" id="" className="h-12 w-full my-2 rounded bg-gray-200 shadow-md pl-2" required disabled placeholder='Enter Start Time' 
                  value={EmailUser}/>
                </div>
              </div>
            </form>
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

export default AddLeaves