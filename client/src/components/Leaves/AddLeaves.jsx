import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import  secureLocalStorage  from  "react-secure-storage"
import CountUp from 'react-countup'
import axios from 'axios'


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
    catch (err) {
      console.log(err)
    }
  } 


  if(RoleUser !== null && EmailUser !== null){
    return (
      <div>
        <div className="bg-white py-4 px-8 rounded shadow-md mr-4">
          <h1 className="font-semibold text-gray-500 text-2xl">New Leave</h1>
          {
            (() => {
              if(RoleUser === "HOD"){
                return (
                  <div className="">
                    <Link>
                      <button className='bg-gradient-to-r from-green-500 via-white-500 to-blue-500 text-white py-2 my-4 px-8 rounded font-semibold'>leave Requests</button>
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
                  <input type="time" name="" id="" className="text-gray-700 h-12 w-full my-2 rounded bg-gray-200 shadow-md pl-2" required placeholder='Enter Start Time' 
                  onChange={e => SetLeaveData({...LeaveData, startTime:e.target.value})}/>
                </div>

                <div className="my-4">
                  <label htmlFor="" className="text-gray-500">Email</label>
                  <input type="email" name="" id="" className="text-gray-700 h-12 w-full my-2 rounded bg-gray-200 shadow-md pl-2" required disabled placeholder='Enter Start Time' 
                  value={EmailUser} />
                </div>

                <div className="my-4">
                  <label htmlFor="" className="text-gray-500">HOD Email</label>
                  <select name="" id="" className='text-gray-700 h-12 w-full my-2 rounded bg-gray-200 shadow-md pl-2'
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
                  <input type="date" name="" id="" className="text-gray-700 h-12 w-full my-2 rounded bg-gray-200 shadow-md pl-2" required placeholder='Enter Start Date' 
                   onChange={e => SetLeaveData({...LeaveData, startDate:e.target.value})}/>
                </div>

                <div className="my-4">
                  <label htmlFor="" className="text-gray-500">End Date</label>
                  <input type="date" name="" id="" className="text-gray-700 h-12 w-full my-2 rounded bg-gray-200 shadow-md pl-2" required placeholder='Enter End Date' 
                  onChange={e => SetLeaveData({...LeaveData, endDate:e.target.value})}/>
                </div>

                <div className="my-4">
                  <label htmlFor="" className="text-gray-500">Dutarion</label>
                  <input type="text" name="" id="" className="text-gray-700 h-12 w-full my-2 rounded bg-gray-200 shadow-md pl-2" required placeholder='Enter Dutarion' 
                  onChange={e => SetLeaveData({...LeaveData, Dutarion:e.target.value})}/>
                </div>                
              </div>

              <div className="my-4">
                <button type="submit" className="bg-gradient-to-r from-green-500 via-white-500 to-blue-500 text-white py-4 px-8 rounded font-semibold">Request Leave</button>
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