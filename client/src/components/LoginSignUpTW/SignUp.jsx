import React, { useState } from 'react'
import { BsMortarboardFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import  NIFSLogo  from '../../assets/nifs_logo.png';
import axios from 'axios';

const SignUp = () => {
     // for login data
    const [SignUpData, SetSignUpData] = useState({
        username: '',
        email: '',
        password: ''
    })

    // send data to backend using axios
    const headleSubmit = async (e) => {
        e.preventDefault();

        try{
            // custom created REST API
            const res = await axios.get(`https://teamprojectsreact.github.io/EMPAPI/EmpRestAPI.employees.jsonq=${email}+in:email`)
        
            if (response.data.total_count > 0) {
               console.log('This email is associated with a GitHub account.');
            } else {
               console.log('This email is not associated with any GitHub account.');
            }
        }   
        catch (err) {
            console.log(err)
        }

    }
  return (
    <div className='bg-gray-200 min-h-screen py-24 px-8'>
        <div className="md:grid grid-cols-3 gap-2">
            <div className=""></div>
            <div className="">
                <div className="bg-white py-16 px-8 rounded shadow-md w-full ">
                    <center className='text-gray-500'>
                        {/* change the Icon According to your needs */}
                        <h1 className=''><img src={NIFSLogo} alt="" /></h1>
                        <p className="pt-4 text-2xl">Welcome to</p>
                        <p className="">ERP System</p>
                    </center>
                    <hr className='my-2'/>
                    <div className="my-4">
                        <form onSubmit={headleSubmit}>
                             <div className="my-2 md:mx-8">
                                <label htmlFor="" className=''>Username : </label>
                                <input type="text" name="" id="" className="w-full h-12 pl-2 rounded bg-gray-200" required placeholder='Enter Username'
                                onChange={e => SetSignUpData({...SignUpData, username:e.target.value})}/>
                            </div>
                            <div className="my-2 md:mx-8">
                                <label htmlFor="" className=''>Email : </label>
                                <input type="email" name="" id="" className="w-full h-12 pl-2 rounded bg-gray-200" required placeholder='Enter Email Address'
                                onChange={e => SetSignUpData({...SignUpData, email:e.target.value})}/>
                            </div>
                            <div className="my-2 md:mx-8">
                                <label htmlFor="" className=''>Password : </label>
                                <input type="password" name="" id="" className="w-full h-12 pl-2 rounded bg-gray-200" required placeholder='Enter Password' 
                                onChange={e => SetSignUpData({...SignUpData, password:e.target.value})}/>
                            </div>
                            <div className="my-2 md:mx-8">
                                <button type='submit' className='mt-8 font-semibold w-full py-4 px-8 rounded bg-blue-500 text-white shadow-md duration-500 hover:bg-blue-600'>Sign Up</button>
                            </div>
                        </form>
                    </div>
                    <hr className='my-2'/>
                    <p className="my-4">Already have an Account ? <Link to={'/'}><span className="text-blue-500">SignUp</span></Link></p>
                </div>  
            </div>
            <div className=""></div>
        </div>
    </div>
  )
}

export default SignUp