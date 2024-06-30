import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import  secureLocalStorage  from  "react-secure-storage"
import CountUp from 'react-countup'
import axios from 'axios'
import { BsBoxArrowDownRight, BsCarFront, BsExclamationTriangleFill, BsXCircleFill } from 'react-icons/bs'


const AddLeaves = () => {
  const navigate = useNavigate()
  //curent login user
  const EmailUser = secureLocalStorage.getItem("Login1");
  const RoleUser = secureLocalStorage.getItem("Login2");

  // get all hods in database
  const [hodD, SetHodData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/leave/hodData')
    .then(res => SetHodData(res.data.Result))
    .catch(err => console.log(err)) 
  }, [])

  // count leaves accroding to the current login user
  const [UserLeaveData, SetUserLeaveData] = useState([])
  useEffect(() => {
    axios.get('http://localhost:5000/leave/getUserLeave/' + EmailUser)
    .then(res => SetUserLeaveData(res.data.Result))
    .catch(err => console.log(err))
  }, [])

  // send leave data to backend
  const [LeaveData, SetLeaveData] = useState({
    startTime: '',
    hodEmail: '',
    startDate: '',
    endDate: '',
    Dutarion: ''
  })

  const headleSubmit = async (e) => {
    e.preventDefault();
    // console.log(LeaveData)

    try{
      if(LeaveData.startDate > LeaveData.endDate){
        alert("End Data Must be After Data in Start Data")
      }
      else if(LeaveData.startDate === LeaveData.endDate){
        alert("Start Date and End Date cannot be Same")
      }
      else{
        const res = await axios.post('http://localhost:5000/leave/AddLeave/' + EmailUser, LeaveData)
        .then(res => {
          if(res.data.Status === "Success"){
            alert('Request Leave Successful')
            window.location.reload()
          }
          else{
            alert(res.data.Error)
          }
        })
      }
    }
    catch (err) {
      console.log(err)
    }
  } 


  if(RoleUser !== null && EmailUser !== null){
    return (
      <div>
        {
          (() => {
            if(UserLeaveData === 1 || UserLeaveData === 0 ){
              return (
                <div className="flex mb-4">
                  <div className="text-white rounded-l bg-green-500 p-3">
                    <BsBoxArrowDownRight />
                  </div>
                  <div className="bg-green-400 rounded-r py-2 px-4 text-white">
                    <span className='font-bold'>Leave Request Quota: </span>You can only request 3 Leaves
                  </div>
                </div>
              )
            }
            if(UserLeaveData === 2){
              return (
                <div className="flex mb-4">
                  <div className="text-white rounded-l bg-yellow-500 p-3">
                    <BsExclamationTriangleFill />
                  </div>
                  <div className="bg-yellow-400 rounded-r py-2 px-4 text-black">
                    <span className='font-bold'>Leave Request Quota: </span>You already reqeust 2 out of 3 leaves
                  </div>
                </div>
              )
            }
            if(UserLeaveData === 3){
              return (
                <div className="">
                  <div className="flex mb-2">
                    <div className="text-white rounded-l bg-red-500 p-3">
                      <BsXCircleFill />
                    </div>
                    <div className="bg-red-400 rounded-r py-2 px-4 text-white">
                      <span className='font-bold'>Sorry.., </span>You already Reach the Maximum leave Request Quota
                    </div>
                  </div>
                  <p className="text-red-500 mb-4">
                    Please wait for Approve leaves or, go to your Leaves and delete some leaves
                  </p>
                </div>
              )
            }
          })()
        }
        <div className="bg-green-500/10 border-l-2 border-green-500 py-4 px-8 rounded shadow-md mr-4 ">        
          <h1 className="font-semibold text-gray-500 text-2xl">New Leave</h1>
          {
            (() => {
              if(RoleUser === "HOD"){
                return (
                  <div className="">
                    <Link to={'RequestLeaves'}>
                      <button className='bg-blue-600/95 text-white py-2 my-4 px-8 rounded font-semibold'>leave Requests</button>
                    </Link>                    
                  </div>
                )
              }
            })()
          }
          <hr />
          <div className="my-4">            
            <form onSubmit={headleSubmit}>
              <div className="md:grid grid-cols-3 gap-4">
                <div className="my-4">
                  <label htmlFor="" className="text-gray-500">Start Time</label>
                  <input type="time" name="" id="" className="text-gray-700 h-12 w-full my-2 rounded bg-white shadow-md pl-2" required placeholder='Enter Start Time' 
                  onChange={e => SetLeaveData({...LeaveData, startTime:e.target.value})}/>
                </div>

                <div className="my-4">
                  <label htmlFor="" className="text-gray-500">Email</label>
                  <input type="email" name="" id="" className="text-gray-700 h-12 w-full my-2 rounded bg-white shadow-md pl-2" required disabled placeholder='Enter Start Time' 
                  value={EmailUser} />
                </div>

                <div className="my-4">
                  <label htmlFor="" className="text-gray-500">HOD Email</label>
                  <select name="" id="" className='text-gray-700 h-12 w-full my-2 rounded bg-white shadow-md pl-2'
                   onChange={e => SetLeaveData({...LeaveData, hodEmail:e.target.value})}>
                    <option value="">Select One</option>
                    {
                      hodD.map((hod) => {
                        return (
                          <option value={hod.email}>{hod.email} - {hod.username}</option>
                        )
                      })
                    }
                  </select>
                </div>

                <div className="my-4">
                  <label htmlFor="" className="text-gray-500">Start Date</label>
                  <input type="date" name="" id="" className="text-gray-700 h-12 w-full my-2 rounded bg-white shadow-md pl-2" required placeholder='Enter Start Date' 
                   onChange={e => SetLeaveData({...LeaveData, startDate:e.target.value})}/>
                </div>

                <div className="my-4">
                  <label htmlFor="" className="text-gray-500">End Date</label>
                  <input type="date" name="" id="" className="text-gray-700 h-12 w-full my-2 rounded bg-white shadow-md pl-2" required placeholder='Enter End Date' 
                  onChange={e => SetLeaveData({...LeaveData, endDate:e.target.value})}/>
                </div>

                <div className="my-4">
                  <label htmlFor="" className="text-gray-500">Duration</label>
                  <input type="text" name="" id="" className="text-green-700 h-12 w-full my-2 rounded bg-white shadow-md pl-2" required placeholder='Enter Dutarion' 
                  onChange={e => SetLeaveData({...LeaveData, Dutarion:e.target.value})}/>
                </div>                
              </div>

              {
                (() => {
                  if(UserLeaveData < 3){
                    return (
                      <div className="my-4">
                        <button type="submit" className="bg-green-500 text-white py-4 px-8 rounded font-semibold">Request Leave</button>
                      </div>
                    )
                  }
                  else{
                    return (
                      <div className="my-4">
                        <button type="submit" disabled className="bg-red-500 text-white py-4 px-8 rounded font-semibold">Request Leave</button>
                      </div>
                    )
                  }
                })()
              }
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