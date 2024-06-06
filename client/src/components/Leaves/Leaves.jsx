import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import  secureLocalStorage  from  "react-secure-storage"

const Leaves = () => {
  const navigate = useNavigate()
  //curent login user
  const EmailUser = secureLocalStorage.getItem("Login1");
  const RoleUser = secureLocalStorage.getItem("Login2");

  if(EmailUser !== null && RoleUser !== null){
    return (
      <div className='ml-4'>
        <div className="">
          <h1 className="text-xl font-semiblod text-gray-500">Leaves</h1>
          <div className="my-4">
            hi all
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