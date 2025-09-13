import React from 'react'
import assets from '../assets/assets'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {
  const navigate = useNavigate();
    const [currState,setcurrState]=useState('Sign Up');
    const [fullName,setfullName]=useState('');
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [bio, setbio] = useState("")
    const [isDataSubmit, setIsDataSubmit] = useState(false)
    const onSubmitHandler=(event)=>{
        event.preventDefault();
        if(currState==="Sign Up" && !isDataSubmit){
            setIsDataSubmit(true);
            return;
        }
         navigate('/');
    }
  return (
    <div className='min-h-screen bg-color bg-center flex items-center justify-center gap-4 sm:justify-evenly max-sm:flex-col backdrop-blur-2xl'>
      {/* -------left-------- */}
      <img src={assets.logo_big} className='w-[min(30vw,250px)]'/>
      {/* --right------- */}
      <form onSubmit={onSubmitHandler} className='border-2 bg-white/8 text-white border-gray-500 p-6 flex flex-col gap-6 rounded-lg shadow-lg'>
        <h2 className='font-medium text-xl flex justify-between items-center'>
            {currState}
           <img scr={assets.arrow_icon} className='w-5 cursor-pointer'/>
        </h2>
        {currState==="Sign Up" && !isDataSubmit && <input 
        onChange={(e)=>setfullName(e.target.value)} value={fullName} 
        type="text" placeholder='Full Name'className="p-2 border border-gray-500 rounded-md text-sm focus:outline-none" required />}


       {!isDataSubmit && (
        <>
        <input
        onChange={(e)=>setemail(e.target.value)} value={email} 
        type="email" placeholder='Email Address' required className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm'/>
        <input
        onChange={(e)=>setpassword(e.target.value)} value={password} 
        type="password" placeholder='Password.....' required className='p-2 border border-gray-500 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'/>
        </>
       )}
       {
        currState==="Sign Up" && !isDataSubmit && (
            <textarea 
            onChange={(e)=>setbio(e.target.value)} value={bio}
            rows={2} placeholder='Enter Your Bio....'
            className="p-2 border  text-sm border-gray-500 rounded-md focus:ring-indigo-500"/>
        )
       }
       <div className='flex items-center gap-2 text-sm text-gray-500'>
            <input type="checkbox" required/>
            <p>Agree to the terms of use & privacy policy</p>
        </div>
       <button className='py-3 bg-gradient-to-r from-purple-400 to-violet-600 text-white rounded-md cursor-pointer'>
       {currState==="Sign Up" ? 
        "Create Account":"Login Now"
       }
        </button>
   
      <div className="flex flex-col items-center gap-2">
        {currState==="Sign Up" ? (
            <p className='text-sm text-gray-600'>Already have an acoount? <span className='font-medium text-violet-500 cursor-pointer' onClick={()=>{setcurrState("Login");setIsDataSubmit(false)}}>Login here</span></p>
        ) : (
            <p className='text-sm text-gray-600'>Create an account <span className='font-medium text-violet-500 cursor-pointer' onClick={()=>{setcurrState("Sign Up")}}>Click here</span></p>
        )}
      </div>
      </form>
    </div>
  )
}

export default LoginPage