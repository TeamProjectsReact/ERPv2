import React, { useEffect, useState } from 'react'
import { BsBoxArrowDownRight, BsPersonFillAdd, BsPersonFillLock } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import  secureLocalStorage  from  "react-secure-storage";
import CountUp from 'react-countup';

const Vehicles = () => {
    const navigate = useNavigate()
    const EmailUser = secureLocalStorage.getItem("Login1");
    const RoleUser = secureLocalStorage.getItem("Login2");

    if(RoleUser === "SuperAdmin")
  return (
    <div>Vehicles</div>
  )
}

export default Vehicles