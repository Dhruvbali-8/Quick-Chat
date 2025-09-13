import React, { useState } from 'react'
import assets from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const ProfilePage = () => {
  const [selectedImg, setSelectedImg] = useState(null)   // ✅ inside component
  const navigate = useNavigate()
  const [name, setName] = useState("User")
  const [bio, setBio] = useState("Hey!, I'm using Quick Chat")
 
   const HandleSubmit=async(e)=>{
    e.preventDefault();
    navigate('/');
   }
  return (
    <div className='min-h-screen bg-cover bg-no-repeat flex justify-center items-center '>
      <div className='w-5/6 max-w-2xl backdrop-blur-2xl text-gray-300 border-2 border-gray-600 flex items-center justify-between max-sm:flex-col-reverse rounded-lg'>
        
        <form onSubmit={HandleSubmit} className='flex flex-col gap-5 p-10 flex-1'>
          <h3 className='text-lg text-white'>Profile details</h3>
          
          <label htmlFor="avatar" className='flex items-center gap-3 cursor-pointer'>
            <input 
              onChange={(e) => setSelectedImg(e.target.files[0])} 
              type='file' 
              id='avatar' 
              accept='.png,.jpg,.jpeg' 
              hidden
            />
            <img 
              src={selectedImg ? URL.createObjectURL(selectedImg) : assets.avatar_icon} 
              className={`w-12 h-12 ${selectedImg && 'rounded-full'}`} 
              alt="profile"
            />
            Upload profile image
          </label> 
          <input 
          onChange={(e)=>setName(e.target.value)} value={name}
          type='text' required placeholder='Your Name' className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500'/>
          <textarea required placeholder='Write your Bio......' rows={4} className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500' 
          onChange={(e)=>setBio(e.target.value)} value={bio}></textarea>
        <button type="submit" 
        className="bg-gradient-to-r from-purple-400 to-violet-600 text-white p-2 rounded-full text-lg cursor-pointer" >Save</button>
        </form>
        <img src={assets.logo_icon} className='max-w-44 aspect-square rounded-full mx-10 max-sm:mt-10' alt=""/>
      </div>
    </div>
  )
}

export default ProfilePage
