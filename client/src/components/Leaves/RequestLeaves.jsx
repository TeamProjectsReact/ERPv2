import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import  secureLocalStorage  from  "react-secure-storage"
import axios from 'axios'
import Leaves from './Leaves'

const RequestLeaves = () => {
    const navigate = useNavigate()
    //curent login user
    const EmailUser = secureLocalStorage.getItem("Login1");
    const RoleUser = secureLocalStorage.getItem("Login2");

    const [buttonValue, SetButtonValue] = useState(0)
    const HeadleButtonClick = (clickValue) => {        
        SetButtonValue(clickValue)   
    }

    // get leaves according to current login hod
    const [LeaveHod, SetLeaveHod] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/leave/AllLeaves')
        .then(res => SetLeaveHod(res.data.Result))
        .catch(err => console.log(err))
    }, [])

    // accept Leave
    const headleAccept = async (leaveID) => {
        try{
            const res = await axios.post('http://localhost:5000/leave/AcceptLeave/' + leaveID)
            .then(res => {
                if(res.data.Status === "Success"){
                    alert("Leave successfully Approved")
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

    // rollBack
    const headleRollBack = async (leaveID) => {
        try{
            const res = await axios.post('http://localhost:5000/leave/LeaveRollback/' + leaveID)
            .then(res => {
                if(res.data.Status === "Success"){
                    alert("Rollback Successfull")
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

    // Reject Leave
    const headleReject = async (leaveID) => {
        try{
            const res = await axios.post('http://localhost:5000/leave/LeaveRejected/' + leaveID)
            .then(res => {
                if(res.data.Status === "Success"){
                    alert("leave Rejected Successfull")
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

    // detele leave
    const headleDelete = async (leaveID) => {
        try{
            const res = await axios.delete('http://localhost:5000/leave/LeaveDelete/' + leaveID)
            .then(res => {
                if(res.data.Status === "Success"){
                    alert("leave Deleted Successfull")
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

    if(RoleUser === "SuperAdmin" || RoleUser === "Director" || RoleUser === "Secretary" || RoleUser === "HOD"){
        return (
            <div className=''>
                <Leaves />
                <div className="my-4">                    
                    <div className="py-2 px-4 rounded shadow-md overflow-x-auto my-8 bg-white">
                    <h1 className="pb-4">Request Leaves</h1>
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-green-500/50 text-green-800 h-12 dark:bg-gray-700 dark:text-green-400">
                                <th scope="col" className=" table-cell">
                                    <p className="md:block hidden">Email</p>
                                    <p className="md:hidden block">Leave Data</p>                                                                        
                                </th>
                                <td scope="col" className=" hidden md:table-cell">
                                    Start Time
                                </td>
                                <td scope="col" className=" hidden md:table-cell">
                                    Start Date
                                </td>
                                <td scope="col" className=" hidden md:table-cell">
                                    End Date
                                </td>
                                <td scope="col" className=" hidden md:table-cell">
                                    Duration
                                </td>
                                <td scope="col" className=" hidden md:table-cell">
                                    Status
                                </td>
                                <td scope="col" className="table-cell">
                                    Action
                                </td>
                            </thead>
                            <tbody>
                                {
                                    LeaveHod.map((leaves, index) => {
                                        if(RoleUser === "SuperAdmin" || RoleUser === "Director" || RoleUser === "Secretary"){
                                            return (
                                                <tr key={index} className='border-b border-gray-200'>
                                                    <th scope="row" class="px-2 py-4 font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                        <p className="hidden md:table-cell">{leaves.reqEmail}</p>
                                                        <div className="md:hidden">
                                                            <p className="font-semibold">{leaves.reqEmail}</p>
                                                            <p className="">{leaves.email}</p>
                                                            <p className="">{leaves.StartTime}</p>
                                                            <p className="">{leaves.StartData}</p>
                                                            <p className="">{leaves.EndDate}</p>
                                                            <p className="">{leaves.Dutarion}</p>
                                                            <p className="text-yellow-500 font-semibold">{leaves.Status}</p>
                                                        </div>
                                                    </th>
                                                    <td scope="row" class="hidden md:table-cell px-2 py-4 text-gray-500 whitespace-nowrap dark:text-white">
                                                        {leaves.StartTime}
                                                    </td>
                                                    <td scope="row" class="hidden md:table-cell px-2 py-4 text-gray-500 whitespace-nowrap dark:text-white">
                                                        {leaves.StartData}
                                                    </td>
                                                    <td scope="row" class="hidden md:table-cell px-2 py-4 text-gray-500 whitespace-nowrap dark:text-white">
                                                        {leaves.EndDate}
                                                    </td>
                                                    <td scope="row" class="hidden md:table-cell px-2 py-4 text-gray-500 whitespace-nowrap dark:text-white">
                                                        {leaves.Dutarion}
                                                    </td>
                                                    <td scope="row" class="font-semibold hidden md:table-cell px-2 py-4 text-gray-500 whitespace-nowrap dark:text-white">
                                                        {
                                                            (() => {
                                                                if(leaves.Status === "Accepted"){
                                                                    return (
                                                                        <p className="text-green-500 font-semibold">{leaves.Status}</p>
                                                                    )
                                                                }
                                                                else if(leaves.Status === "Requested"){
                                                                    return (
                                                                        <p className="text-yellow-500 font-semibold">{leaves.Status}</p>
                                                                    )
                                                                }
                                                                else if(leaves.Status === "Rejected"){
                                                                    return (
                                                                        <p className="text-red-500 font-semibold">{leaves.Status}</p>
                                                                    )
                                                                }
                                                            })()
                                                        }
                                                        
                                                    </td>
                                                    <td>
                                                        {
                                                            (() => {
                                                                if(leaves.Status === "Requested"){
                                                                    return (
                                                                        <div className="md:flex">
                                                                            <button onClick={() => headleAccept(leaves._id)} className='mx-1 w-full md:my-0 my-1 bg-green-500 text-white py-1 px-3 rounded shadow-md duration-500 hover:bg-green-600'>Accept</button>
                                                                            <button onClick={() => headleReject(leaves._id)} className='mx-1 w-full md:my-0 my-1 bg-red-500 text-white py-1 px-3 rounded shadow-md duration-500 hover:bg-red-600'>Reject</button>
                                                                        </div>
                                                                    )
                                                                }
                                                                else if(leaves.Status === "Accepted"){
                                                                    return (
                                                                        <div className="md:flex">
                                                                            <button onClick={() => headleApprove(leaves._id)} className='mx-1 w-full md:my-0 my-1 bg-green-500 text-white py-1 px-3 rounded shadow-md duration-500 hover:bg-green-600'>Approve</button>
                                                                            <button onClick={() => headleRollBack(leaves._id)} className='mx-1 w-full md:my-0 my-1 bg-blue-500 text-white py-1 px-3 rounded shadow-md duration-500 hover:bg-blue-600'>RollBack</button>
                                                                            <button onClick={() => headleReject(leaves._id)} className='mx-1 w-full md:my-0 my-1 bg-red-500 text-white py-1 px-3 rounded shadow-md duration-500 hover:bg-red-600'>Reject</button>
                                                                        </div>
                                                                    )
                                                                }
                                                                else if(leaves.Status === "Rejected"){
                                                                    return (
                                                                        <div className="md:flex">
                                                                            <button onClick={() => headleDelete(leaves._id)} className='mx-1 w-full md:my-0 my-1 bg-red-500 text-white py-1 px-3 rounded shadow-md duration-500 hover:bg-red-600'>Delete</button>
                                                                        </div>
                                                                    )
                                                                }
                                                            })()
                                                        }
                                                    </td>
                                                </tr>
                                            )
                                        }
                                        if(leaves.hodEmail === EmailUser){
                                            return (
                                                <tr key={index} className='border-b border-gray-200'>
                                                    <th scope="row" class="px-2 py-4 font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                                        <p className="hidden md:table-cell">{leaves.reqEmail}</p>
                                                        <div className="md:hidden">
                                                            <p className="font-semibold">{leaves.reqEmail}</p>
                                                            <p className="">{leaves.email}</p>
                                                            <p className="">{leaves.StartTime}</p>
                                                            <p className="">{leaves.StartData}</p>
                                                            <p className="">{leaves.EndDate}</p>
                                                            <p className="">{leaves.Dutarion}</p>
                                                            <p className="text-yellow-500 font-semibold">{leaves.Status}</p>
                                                        </div>
                                                    </th>
                                                    <td scope="row" class="hidden md:table-cell px-2 py-4 text-gray-500 whitespace-nowrap dark:text-white">
                                                        {leaves.StartTime}
                                                    </td>
                                                    <td scope="row" class="hidden md:table-cell px-2 py-4 text-gray-500 whitespace-nowrap dark:text-white">
                                                        {leaves.StartData}
                                                    </td>
                                                    <td scope="row" class="hidden md:table-cell px-2 py-4 text-gray-500 whitespace-nowrap dark:text-white">
                                                        {leaves.EndDate}
                                                    </td>
                                                    <td scope="row" class="hidden md:table-cell px-2 py-4 text-gray-500 whitespace-nowrap dark:text-white">
                                                        {leaves.Dutarion}
                                                    </td>
                                                    <td scope="row" class="font-semibold hidden md:table-cell px-2 py-4 text-gray-500 whitespace-nowrap dark:text-white">
                                                        {
                                                            (() => {
                                                                if(leaves.Status === "Accepted"){
                                                                    return (
                                                                        <p className="text-green-500 font-semibold">{leaves.Status}</p>
                                                                    )
                                                                }
                                                                else if(leaves.Status === "Requested"){
                                                                    return (
                                                                        <p className="text-yellow-500 font-semibold">{leaves.Status}</p>
                                                                    )
                                                                }
                                                                else if(leaves.Status === "Rejected"){
                                                                    return (
                                                                        <p className="text-red-500 font-semibold">{leaves.Status}</p>
                                                                    )
                                                                }
                                                            })()
                                                        }
                                                        
                                                    </td>
                                                    <td>
                                                        {
                                                            (() => {
                                                                if(leaves.Status === "Requested"){
                                                                    return (
                                                                        <div className="md:flex">
                                                                            <button onClick={() => headleAccept(leaves._id)} className='mx-1 w-full md:my-0 my-1 bg-green-500 text-white py-1 px-3 rounded shadow-md duration-500 hover:bg-green-600'>Accept</button>
                                                                            <button onClick={() => headleReject(leaves._id)} className='mx-1 w-full md:my-0 my-1 bg-red-500 text-white py-1 px-3 rounded shadow-md duration-500 hover:bg-red-600'>Reject</button>
                                                                        </div>
                                                                    )
                                                                }
                                                                else if(leaves.Status === "Accepted"){
                                                                    return (
                                                                        <div className="md:flex">
                                                                            <button onClick={() => headleRollBack(leaves._id)} className='mx-1 w-full md:my-0 my-1 bg-blue-500 text-white py-1 px-3 rounded shadow-md duration-500 hover:bg-blue-600'>RollBack</button>                                                                            
                                                                            <button onClick={() => headleReject(leaves._id)} className='mx-1 w-full md:my-0 my-1 bg-red-500 text-white py-1 px-3 rounded shadow-md duration-500 hover:bg-red-600'>Reject</button>
                                                                        </div>
                                                                    )
                                                                }
                                                                else if(leaves.Status === "Rejected"){
                                                                    return (
                                                                        <div className="md:flex">
                                                                            <button onClick={() => headleDelete(leaves._id)} className='mx-1 w-full md:my-0 my-1 bg-red-500 text-white py-1 px-3 rounded shadow-md duration-500 hover:bg-red-600'>Delete</button>
                                                                        </div>
                                                                    )
                                                                }
                                                            })()
                                                        }
                                                    </td>
                                                </tr>
                                            )
                                        }

                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
    else if(RoleUser !== "SuperAdmin" && RoleUser !== "Director" && RoleUser !== "Secretary" && RoleUser !== "HOD"){
        return (
            <div className="">
                <Leaves />
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

export default RequestLeaves